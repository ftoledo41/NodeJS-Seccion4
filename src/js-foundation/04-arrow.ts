
interface User {
  id: string;
  name: string;
}

const users = [
  {
    id: 1,
    name: "Jhon Doe",
  },
  {
    id: 2,
    name: "Francisco Toledo",
  },
];

export const getUserById = (id:number, callback:(error?:string, user?:string)=>void) => {
  const user = users.find((user) => user.id === id);

  if (!user) return callback(`User not found with id ${id}`);
};
