import { UserModel } from "../../core/infrastructure";
import { UserDomain } from "../../core/domain";

export class UsersService {
    async findAll() {
        return await UserModel.find();
    }

    async findById(id: string) {
        return await UserModel.findById(id);
    }

    async create(userData: Omit<UserDomain, 'id' | 'createdAt' | 'updatedAt'>) {
        return await UserModel.create(userData);
    }
}
