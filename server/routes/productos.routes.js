import { Router } from "express";
import {
  getAllProductos,
  getProducto,
} from "../controllers/productos.controllers.js";
const router = Router();

router.get("/productos", getAllProductos);

router.get("/productos/:id", getProducto);
