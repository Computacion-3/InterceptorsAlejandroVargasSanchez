interface User {
  id: number;
  name: string;
  role: string;
}

const mainUser: User = {
  id: 1,
  name: "Kevin David",
  role: "Teacher"
};

function printUserInfo(user: User): void {
  console.log(`[User Log]: ${user.name} (${user.role}) - ID: ${user.id}`);
}

printUserInfo(mainUser);
printUserInfo(mainUser);
