import { pool } from "../config/connection";

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
  const { nombre, precio, descripcion, sucursalID } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO PRODUCTOS(nombre, precio, descripcion, sucursalID) VALUES (?, ?, ?, ?)",
      [nombre, precio, descripcion, sucursalID]
    );

    res.status(201).json({
      id: result.insertId,
      nombre,
      precio,
      descripcion,
      sucursalID,
    });

  } catch (err) {
    console.error("Error al insertar producto", err);
    res.status(500).json({ error: "Error al insertar producto" });
  }
};


