import { UsersRepository } from './users.repository';
import { UserDomain } from '../../core/domain';

export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    getAllUsers(): UserDomain[] {
        return this.usersRepository.findAll();
    }

    getUserById(id: number): UserDomain {
        const user = this.usersRepository.findById(id);
        if (!user) {
            throw new Error(`Usuario con ID ${id} no encontrado`);
        }
        return user;
    }

    createUser(data: { name: string; email: string; password?: string }): UserDomain {
        if (!data.name || !data.email) {
            throw new Error('Nombre y Email son requeridos');
        }
        return this.usersRepository.create(data);
    }
}
