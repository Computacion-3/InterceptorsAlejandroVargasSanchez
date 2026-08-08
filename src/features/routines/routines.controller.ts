import { Request, Response } from "express";
import { RoutinesService } from "./routines.service";

export class RoutinesController {
    constructor(private routinesService: RoutinesService) {}

    findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const routines = await this.routinesService.findAll();
            res.status(200).json(routines);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    findById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string;
            const routine = await this.routinesService.findById(id);
            if (!routine) {
                res.status(404).json({ message: "Rutina no encontrada" });
                return;
            }
            res.status(200).json(routine);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            const newRoutine = await this.routinesService.create(req.body);
            res.status(201).json(newRoutine);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };
}
