import { httpClientPlugin } from "../plugins/http-client.plugin";


export const getPokemonById = async (id: string | number): Promise<string> => {
  
  try {
    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`
  }


};
