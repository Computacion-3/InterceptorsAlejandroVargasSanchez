import { UserDomain } from '../../core/domain';

export class UsersRepository {
    private users: UserDomain[] = [
        new UserDomain(1, 'Kevin David', 'kevin@icesi.edu.co', 'secret123', new Date(), new Date()),
        new UserDomain(2, 'Maria Gomez', 'maria@gmail.com', 'secret456', new Date(), new Date())
    ];

    findAll(): UserDomain[] {
        return this.users;
    }

    findById(id: number): UserDomain | undefined {
        return this.users.find(u => u.id === id);
    }

    create(user: Omit<UserDomain, 'id' | 'createdAt' | 'updatedAt'>): UserDomain {
        const newUser = new UserDomain(
            this.users.length + 1,
            user.name,
            user.email,
            user.password,
            new Date(),
            new Date()
        );
        this.users.push(newUser);
        return newUser;
    }
}
