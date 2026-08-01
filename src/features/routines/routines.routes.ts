import { Router } from 'express';
import { RoutinesRepository } from './routines.repository';
import { RoutinesService } from './routines.service';
import { RoutinesController } from './routines.controller';

const router = Router();

// Inyección manual de dependencias
const repository = new RoutinesRepository();
const service = new RoutinesService(repository);
const controller = new RoutinesController(service);

router.get('/', controller.getAll);
router.get('/user/:userId', controller.getByUserId);
router.post('/', controller.create);

export default router;
