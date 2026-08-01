export class ExerciseDomain {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public type: string,
        public estimatedCalories: number,
        public estimatedDistanceKm: number,
        public estimatedDurationMin: number,
        public icon: string,
        public createdAt?: Date
    ) {}
}
