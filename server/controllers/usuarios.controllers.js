import { pool } from "../config/connection.js";

export const getAllUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Usuarios");
    res.json(result);
  } catch (err) {
    console.error("Error al obtener usuarios", err);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM Usuarios WHERE userID = ?",
      [req.params.id]
    );

    if (result.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(result[0]);
  } catch (err) {
    console.error("Error al obtener usuario", err);
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

export const postUsuario = async (req, res) => {
  const {
    nombre,
    apellido,
    correo,
    clave,
    edad,
    direccion,
    provincia,
    ciudad,
  } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO Usuarios(nombre, apellido, correo, clave, edad, direccion, provincia, ciudad) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nombre, apellido, correo, clave, edad, direccion, provincia, ciudad]
    );

    res.status(201).json({
      id: result.insertId,
      nombre,
      apellido,
      correo,
      clave,
      edad,
      direccion,
      provincia,
      ciudad,
    });
  } catch (err) {
    console.error("Error al crear usuario", err);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const putUsuario = async (req, res) => {
  try {
    const [rows] = await pool.query("UPDATE Usuarios SET ? WHERE userID = ?", [
      req.body,
      req.params.id,
    ]);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario actualizado correctamente" });
  } catch (err) {
    console.error("Error al actualizar usuario", err);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM Usuarios WHERE userID = ?", [
      req.params.id,
    ]);

    if (rows.affectedRows === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (err) {
    console.error("Error al eliminar usuario", err);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
