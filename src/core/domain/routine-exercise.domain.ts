export class RoutineExerciseDomain {
    constructor(
        public id: number,
        public routineId: number,
        public exerciseId: number,
        public orderIndex: number,
        public targetSets: number,
        public targetReps: number,
        public targetWeightKg: number,
        public targetDurationMin: number,
        public createdAt?: Date
    ) {}
}
