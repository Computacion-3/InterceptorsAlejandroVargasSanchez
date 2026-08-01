export class ActivityLogDomain {
    constructor(
        public id: number,
        public userId: number,
        public routineId: number,
        public startedAt: Date,
        public completedAt?: Date,
        public createdAt?: Date
    ) {}
}
