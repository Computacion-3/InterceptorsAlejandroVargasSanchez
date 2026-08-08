import { RoutineModel } from "../../core/infrastructure";
import { RoutineDomain } from "../../core/domain";

export class RoutinesService {
    async findAll() {
        return await RoutineModel.find().populate('userId', 'name email');
    }

    async findById(id: string) {
        return await RoutineModel.findById(id).populate('userId', 'name email');
    }

    async create(routineData: Omit<RoutineDomain, 'id' | 'createdAt' | 'updatedAt'>) {
        return await RoutineModel.create(routineData);
    }
}
