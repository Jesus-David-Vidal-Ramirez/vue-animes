import dbzapi from "../../api/dbz/dbzApi";

const getTransformations = async () => {
  try {
    const transformations = await dbzapi.get(`/transformations?page=1&limit=20`);
    return transformations.data;
  } catch (error) {
    return { error: "Error al cargar planetas" };
  }
};

const getTransformationsSearch = async ( id ) => {
  try {
    const transformations = await dbzapi.get(`/transformations/${id}`);
    return transformations.data;
  } catch (error) {
    return { error: "Error al cargar personajes" };
  }
};

export {
  getTransformations,
  getTransformationsSearch,
}