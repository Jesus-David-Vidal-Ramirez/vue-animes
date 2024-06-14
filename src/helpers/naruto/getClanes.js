import narutoApi from '../../api/naruto/narutoApi'

const getClanes = async () => {
 
    try {        
        const personaje = await narutoApi.get(`/clans?page=1&limit=20`);
        return personaje.data
    } catch (error) {
        return {error: 'Error al cargar los Clanes'}
    }
}


export {
    getClanes
}