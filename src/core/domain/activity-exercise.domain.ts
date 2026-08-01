export class ActivityExerciseDomain {
    constructor(
        public id: number,
        public activityLogId: number,
        public routineExerciseId: number,
        public actualSets: number,
        public actualReps: number,
        public actualWeightKg: number,
        public actualDurationMin: number,
        public caloriesBurned: number,
        public distanceCoveredKm: number,
        public startedAt: Date,
        public completedAt?: Date
    ) {}
}
