import dbzapi from "../../api/dbz/dbzApi";

const getPersonajes = async () => {
  try {
    const personaje = await dbzapi.get(`/characters?page=1&limit=20`);
    return personaje.data;
  } catch (error) {
    return { error: "Error al cargar personajes" };
  }
};

const getPaginationPersonaje = async ( url) => {
  try {

    if( !url ) {
      return {
        error: true
      }
    }

    const personaje = await dbzapi.get(url);
    
    if(!personaje.data){
      return {
        error: true
      }
    }

    return personaje.data;

  } catch (error) {
    return { error: "Error al cargar personajes" };
  }
  
};

const getPersonajeSearch = async ( name ) => {
  try {
    const personaje = await dbzapi.get(`/characters?name=${name}`);
    return personaje.data;
  } catch (error) {
    return { error: "Error al cargar personajes" };
  }
};

export {
    getPersonajes,
    getPaginationPersonaje,
    getPersonajeSearch
}