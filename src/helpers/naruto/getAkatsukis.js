import narutoApi from "../../api/naruto/narutoApi";

const getAkatsukis = async () => {
  try {
    const akatsuki = await narutoApi.get(`/akatsuki?page=1&limit=50`);
    return akatsuki.data;
  } catch (error) {
    return { error: "Error al cargar akatsukis" };
  }
};

const searchGetAkatsukis = async (name) => {
  try {
    const nombre = name.toLowerCase();
    const akatsukis = await narutoApi.get(`/akatsuki?page=1&name=${nombre}`);
    return akatsukis.data;
  } catch (error) {
    return { error: "Error al cargar akatsukis" };
  }
};

export { getAkatsukis, searchGetAkatsukis };
