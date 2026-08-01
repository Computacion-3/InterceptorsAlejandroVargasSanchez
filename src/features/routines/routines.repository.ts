import { RoutineDomain } from '../../core/domain';

export class RoutinesRepository {
    private routines: RoutineDomain[] = [
        new RoutineDomain(1, 1, 'Rutina de Hipertrofia', 'Entrenamiento de Pecho y Espalda', new Date(), new Date()),
        new RoutineDomain(2, 1, 'Rutina Cardio', '45 minutos de Cardio Intenso', new Date(), new Date())
    ];

    findAll(): RoutineDomain[] {
        return this.routines;
    }

    findByUserId(userId: number): RoutineDomain[] {
        return this.routines.filter(r => r.userId === userId);
    }

    create(routine: Omit<RoutineDomain, 'id' | 'createdAt' | 'updatedAt'>): RoutineDomain {
        const newRoutine = new RoutineDomain(
            this.routines.length + 1,
            routine.userId,
            routine.name,
            routine.description,
            new Date(),
            new Date()
        );
        this.routines.push(newRoutine);
        return newRoutine;
    }
}
