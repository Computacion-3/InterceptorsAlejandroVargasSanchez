/* Type aliases */
type UserType = {
    id?: number;
    name: string;
    lastname: string;
    isActive: boolean;
}

const user: UserType = {
    id: 1,
    name: "Dexter",
    lastname: "Morgan",
    isActive: true,
}

function createUser({name, lastname, isActive}: UserType): UserType {
    return {
        id: Math.floor(Math.random() * 1000),
        name,
        lastname,
        isActive
    }
}

createUser({name: "Kevin", lastname: "David", isActive: true});

/* Classes and Objects */

// 1. Basic Class definition
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

// Creating an instance (Object)
const person1 = new Person("Dexter", 35);
console.log(person1.greet());

// 2. Class Access Modifiers (public, private, protected) & Parameter Properties shorthand
class UserAccount {
    constructor(
        public id: number,
        public username: string,
        private email: string
    ) {}

    getEmail(): string {
        return this.email;
    }
}

const account = new UserAccount(1, "dexter123", "dexter@gmail.com");
console.log(account.username);
// account.email; // Error: email is private

// 3. Inheritance (Extending a class)
class AdminUser extends Person {
    role: string;

    constructor(name: string, age: number, role: string) {
        super(name, age);
        this.role = role;
    }

    getRole(): string {
        return `${this.name} is an ${this.role}`;
    }
}

const admin = new AdminUser("Kevin", 28, "Administrator");
console.log(admin.getRole());

export {}