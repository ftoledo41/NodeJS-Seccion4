"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
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
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user)
        return callback(`User not found with id ${id}`);
};
exports.getUserById = getUserById;
