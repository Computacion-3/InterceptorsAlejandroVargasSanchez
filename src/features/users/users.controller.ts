import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
    constructor(private usersService: UsersService) {}

    findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.usersService.findAll();
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    findById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string;
            const user = await this.usersService.findById(id);
            if (!user) {
                res.status(404).json({ message: "Usuario no encontrado" });
                return;
            }
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            const newUser = await this.usersService.create(req.body);
            res.status(201).json(newUser);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };
}
