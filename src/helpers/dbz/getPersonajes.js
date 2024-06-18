import narutoApi from "../../api/dbz/dbzApi";

const getPersonajes = async () => {
  try {
    const personaje = await narutoApi.get(`/characters?page=1&limit=20`);
    return personaje.data;
  } catch (error) {
    return { error: "Error al cargar personajes" };
  }
};


export {
    getPersonajes
}