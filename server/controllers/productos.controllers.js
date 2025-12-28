import { pool } from "../config/connection.js";

export const getAllProductos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Productos");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

export const getProducto = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Productos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (err) {
    console.error("Error al obtener producto", err);
    res.status(500).json({ error: "Error al obtener producto" });
  }
};

export const postProducto = async (req, res) => {
  const { nombre, precio, descripcion, sucursalName } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO PRODUCTOS(nombre, precio, descripcion, sucursalName) VALUES (?, ?, ?, ?)",
      [nombre, precio, descripcion, sucursalName]
    );

    res.status(201).json({
      id: result.insertId,
      nombre,
      precio,
      descripcion,
      sucursalName,
    });
  } catch (err) {
    console.error("Error al insertar producto", err);
    res.status(500).json({ error: "Error al insertar producto" });
  }
};

export const putProduct = async (req, res) => {
  try {
    const [rows] = await pool.query("UPDATE PRODUCTOS SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    if (rows.affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ mensaje: "Producto actualizado correctamente" });
  } catch (err) {
    console.error("Error al actualizar producto", err);
    res.status(500).json({ error: "Error al actualizar producto" });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM PRODUCTOS WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (err) {
    console.error("Error al eliminar producto", err);
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};
