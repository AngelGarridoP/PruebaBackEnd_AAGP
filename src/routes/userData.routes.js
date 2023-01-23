import {Router} from "express";
const router=Router();
const userService = require("./../services/userData.services");

router.get("/api/Users", userService.obtenerUsuario);
router.get("api/AllUsers", userService.obtenerUsuarioCompleto);
router.get("api/InsertUsers", userService.crearUsuario);
router.get("api/UpdateUsers", userService.editarUsuario);
router.get("api/DeleteUsers", userService.eliminarUsuario);


export default router;