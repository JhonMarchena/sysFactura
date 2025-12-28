import { pool } from "../config/connection.js";

export const getAllSucursales = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Sucursales");
    res.json(result);
  } catch (err) {
    console.error("Error al obtener sucursales:", err);
    res.status(500).json({ error: "Error al obtener sucursales" });
  }
};

export const getSucursal = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Sucursales WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Sucursal no encontrada" });
    }
  } catch (err) {
    console.error("Error al obtener sucursal", err);
    res.status(500).json({ error: "Error al obtener sucursal" });
  }
};

export const postSucursal = async (req, res) => {
  const { nombre, direccion, provincia, ciudad, pais, telefono } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO Sucursales (nombre, direccion, provincia, ciudad, pais, telefono) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre, direccion, provincia, ciudad, pais, telefono]
    );
    res.status(201).json({
      id: result.insertId,
      nombre,
      direccion,
      provincia,
      ciudad,
      pais,
      telefono,
    });
  } catch (err) {
    console.error("Error al crear sucursal", err);
    res.status(500).json({ error: "Error al crear sucursal" });
  }
};

export const putSucursal = async (req, res) => {
  try {
    const [rows] = await pool.query("UPDATE Sucursales SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    if (rows.affectedRows === 0) {
      return res.status(404).json({ error: "Sucursal no encontrada" });
    }

    res.json({ message: "Sucursal actualizada correctamente" });
  } catch (err) {
    console.error("Error al actualizar sucursal", err);
    res.status(500).json({ error: "Error al actualizar sucursal" });
  }
};

export const deleteSucursal = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM Sucursales WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ error: "Sucursal no encontrada" });
    }
    res.json({ message: "Sucursal eliminada correctamente" });
  } catch (err) {
    console.error("Error al eliminar sucursal", err);
    res.status(500).json({ error: "Error al eliminar sucursal" });
  }
};
