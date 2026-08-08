import { Router } from "express";
import { RoutinesService } from "./routines.service";
import { RoutinesController } from "./routines.controller";

const router = Router();

// Inyección de dependencias
const routinesService = new RoutinesService();
const routinesController = new RoutinesController(routinesService);

router.get("/", routinesController.findAll);
router.get("/:id", routinesController.findById);
router.post("/", routinesController.create);

export default router;
