import { Router } from 'express';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

const router = Router();

// Inyección manual de dependencias
const repository = new UsersRepository();
const service = new UsersService(repository);
const controller = new UsersController(service);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);

export default router;
