import { Router } from "express";
import {
  getFacturas,
  getFactura,
  postFactura,
  deleteFactura,
  putFactura,
} from "../controllers/facturas.controllers.js";

const router = Router();

router.get("/facturas", getFacturas);

router.post("/facturas", postFactura);

router.get("/facturas/:id", getFactura);

router.put("/facturas/:id", putFactura);

router.delete("/facturas/:id", deleteFactura);

export default router