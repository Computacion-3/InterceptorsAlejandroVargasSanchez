import { Request, Response } from 'express';
import { UsersService } from './users.service';

export class UsersController {
    constructor(private usersService: UsersService) {}

    getAll = (req: Request, res: Response) => {
        const users = this.usersService.getAllUsers();
        res.json(users);
    };

    getById = (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const user = this.usersService.getUserById(id);
            res.json(user);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    };

    create = (req: Request, res: Response) => {
        try {
            const newUser = this.usersService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    };
}
