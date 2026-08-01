import { Request, Response } from 'express';
import { RoutinesService } from './routines.service';

export class RoutinesController {
    constructor(private routinesService: RoutinesService) {}

    getAll = (req: Request, res: Response) => {
        const routines = this.routinesService.getAllRoutines();
        res.json(routines);
    };

    getByUserId = (req: Request, res: Response) => {
        const userId = Number(req.params.userId);
        const routines = this.routinesService.getRoutinesByUser(userId);
        res.json(routines);
    };

    create = (req: Request, res: Response) => {
        try {
            const newRoutine = this.routinesService.createRoutine(req.body);
            res.status(201).json(newRoutine);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    };
}
