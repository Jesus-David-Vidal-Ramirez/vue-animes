import pokemonApi from "../../api/pokemon/pokemonApi";

const getPokemons = async () => {
  try {

    let pokemons = [];
    for (let index = 1; index <= 20; index++) {
      const pokemon = await pokemonApi.get(`/pokemon/${index}`);
      pokemons.push(
        pokemon.data
      );
    }
    return pokemons;
    
  } catch (error) {
    return { error: "Error al cargar personajes" };
  }
};

// const getPersonajesByIds = async (ids) => {
//   try {
//     let personajesArr = [];
//     let personajesArrResp = [];
//     try {
//       for (let index = 0; index < ids.length; index++) {
//         personajesArr.push(narutoApi.get(`/characters/${ids[index]}`));
//       }

//       personajesArrResp = await Promise.all(personajesArr);
//     } catch (error) {
//       return { error: "Error al cargar personajes" };
//     }

//     return personajesArrResp;
//   } catch (error) {
//     return { error: "Error al cargar personajes" };
//   }
// };

// const searchGetPersonajes = async (name) => {
//   try {
//     const nombre = name.toLowerCase();
//     console.log({ nombre });
//     const personaje = await narutoApi.get(`/characters?page=1&name=${nombre}`);
//     return personaje.data;
//   } catch (error) {
//     return { error: "Error al cargar personajes" };
//   }
// };

export { getPokemons,
  //  getPersonajesByIds, 
  //  searchGetPersonajes 
  };
