import dbzapi from "../../api/dbz/dbzApi";

const getPlanetas = async () => {
  try {
    const planets = await dbzapi.get(`/planets?page=1&limit=20`);
    return planets.data;
  } catch (error) {
    return { error: "Error al cargar planetas" };
  }
};

// const getPaginationPersonaje = async ( url) => {
//   try {

//     if( !url ) {
//       return {
//         error: true
//       }
//     }

//     const personaje = await dbzapi.get(url);
    
//     if(!personaje.data){
//       return {
//         error: true
//       }
//     }

//     return personaje.data;

//   } catch (error) {
//     return { error: "Error al cargar personajes" };
//   }
  
// };

// const getPersonajeSearch = async ( name ) => {
//   try {
//     const personaje = await dbzapi.get(`/characters?name=${name}`);
//     return personaje.data;
//   } catch (error) {
//     return { error: "Error al cargar personajes" };
//   }
// };

export {
    getPlanetas,
    // getPaginationPersonaje,
    // getPersonajeSearch
}