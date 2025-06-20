import { pool } from "../config/connection.js";
import { Router } from "express";

const router = Router();

router.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS result");
  console.log(result[0]);
  res.json(result[0]);
});

export default router
