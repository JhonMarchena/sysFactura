import { pool } from "../config/connection.js";

export const getFacturas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Factura");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener facturas" });
  }
};

export const getFactura = async (res, req) => {
  try {
    const [result] = await pool.query("SELECT * from Factura WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }
  } catch (err) {
    console.error("Error al obtener factura", err);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const postFactura = async (req, res) => {
  const { direccion, fecha, iva, totalNeto, total } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO Factura(direccion, fecha, iva, totalNeto, total) VALUES (?, ?, ?, ?, ?)",
      [direccion, fecha, iva, totalNeto, total]
    );

    res.status(201).json({
      id: result.insertId,
      direccion,
      fecha,
      iva,
      totalNeto,
      total,
    });
  } catch (err) {
    res.status(500).json({ error: "Error al insertar factura" });
  }
};

export const putFactura = async (req, res) => {
  try {
    const [rows] = await pool.query("UPDATE Factura SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    if (rows.affectedRows === 0) {
      res.status(404).json({ error: "Factura no encontrada" });
    }

    res.json({ menesaje: "Factura actualizada correctamente" });
  } catch (err) {
    console.error("Error al actualizar factura", err);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const deleteFactura = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM Factura WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Factura no encontrada" });
    }
    res.json("Factura eliminada correctamente");
  } catch (err) {
    console.error("Error al eliminar factura", err);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
