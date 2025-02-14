import { getPokemonById } from "./../../src/js-foundation/06-promises";

describe("js-foundation/06-promises", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an erro if pokemon does not exits", async () => {
    const pokemonId = 100000000;

    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
