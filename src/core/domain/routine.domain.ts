export class RoutineDomain {
    constructor(
        public id: number,
        public userId: number,
        public name: string,
        public description: string,
        public createdAt?: Date,
        public updatedAt?: Date
    ) {}
}
