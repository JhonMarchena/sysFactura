import { Router } from "express";
import {
  getAllSucursales,
  getSucursal,
  postSucursal,
  putSucursal,
  deleteSucursal,
} from "../controllers/sucursales.controllers.js";

const router = Router();

router.get("/sucursales", getAllSucursales);

router.post("/sucursales", postSucursal);

router.get("/sucursales/:id", getSucursal);

router.put("/sucursales/:id", putSucursal);

router.delete("/sucursales/:id", deleteSucursal);

export default router;
