import { getUserById } from "./../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks", () => {
  test("getUserById should return an error if user does not exists", (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done();
    });
  });

  test("getUserById should return John Doe", (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      // Esto
      // const { id, name } = user!;

      expect(err).toBeUndefined();
      // Esto
      // expect(id).toBe(1);
      // expect(name).toBe("John Doe");

      //o
      expect(user).toEqual({ id: 1, name: "Jhon Doe" });

      done();
    });
  });
});
