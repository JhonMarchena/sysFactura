import { Router } from "express";
import {
    getAllUsuarios,
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
} from "../controllers/usuarios.controllers.js";

const router = Router();

router.get("/Usuarios", getAllUsuarios);

router.post("/Usuarios", postUsuario);

router.get("/Usuarios/:id", getUsuario);

router.put("/Usuarios/:id", putUsuario);

router.delete("/Usuarios/:id", deleteUsuario);

export default router;