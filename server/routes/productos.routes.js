import { Router } from "express";
import {
  getAllProductos,
  getProducto,
  postProducto,
} from "../controllers/productos.controllers.js";
const router = Router();

router.get("/productos", getAllProductos);

router.post("/productos", postProducto);

router.get("/productos/:id", getProducto);


