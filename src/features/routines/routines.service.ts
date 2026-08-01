import { RoutinesRepository } from './routines.repository';
import { RoutineDomain } from '../../core/domain';

export class RoutinesService {
    constructor(private routinesRepository: RoutinesRepository) {}

    getAllRoutines(): RoutineDomain[] {
        return this.routinesRepository.findAll();
    }

    getRoutinesByUser(userId: number): RoutineDomain[] {
        return this.routinesRepository.findByUserId(userId);
    }

    createRoutine(data: { userId: number; name: string; description: string }): RoutineDomain {
        if (!data.name || !data.userId) {
            throw new Error('UserId y Nombre son requeridos');
        }
        return this.routinesRepository.create(data);
    }
}
