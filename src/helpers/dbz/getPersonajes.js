import dbzpi from "../../api/dbz/dbzApi";

const getPersonajes = async () => {
  try {
    const personaje = await dbzpi.get(`/characters?page=1&limit=20`);
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

    const personaje = await dbzpi.get(url);
    
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


export {
    getPersonajes,
    getPaginationPersonaje
}