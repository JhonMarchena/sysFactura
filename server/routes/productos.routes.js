import { Router } from "express";
import {
  getAllProductos,
  getProducto,
  postProducto,
  putProduct,
  deleteProducto,
} from "../controllers/productos.controllers.js";

const router = Router();

router.get("/productos", getAllProductos);

router.post("/productos", postProducto);

router.get("/productos/:id", getProducto);

router.put("/productos/:id", putProduct);

router.delete("/productos/:id", deleteProducto);

export default router;

