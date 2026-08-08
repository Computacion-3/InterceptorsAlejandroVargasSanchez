import { Router } from "express";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

const router = Router();

// Inyección de dependencias
const usersService = new UsersService();
const usersController = new UsersController(usersService);

router.get("/", usersController.findAll);
router.get("/:id", usersController.findById);
router.post("/", usersController.create);

export default router;
