import axios from 'axios';

const consultarTodos = async () => {
    const data = axios.get('http://localhost:8081/api/matricula/v1.0/estudiantes').then(response => response.data);
    return data;
}

const consultarPorId = async (id) => {
    const data = axios.get(`http://localhost:8081/api/matricula/v1.0/estudiantes/${id}`).then(response => response.data);
    return data;
}
const guardar = async (estudiante) => {

    const data = axios.post('http://localhost:8081/api/matricula/v1.0/estudiantes', estudiante).then(response => response.data);
    console.log(data);
    return data;
}
const actualizar = async (id, estudiante) => {
    const data = axios.put(`http://localhost:8081/api/matricula/v1.0/estudiantes/${id}`, estudiante).then(response => response.data);
    console.log(data);
    return data;
}
const actualizarParcial = async (id, estudiante) => {
    const data = axios.patch(`http://localhost:8081/api/matricula/v1.0/estudiantes/${id}`, estudiante).then(response => response.data);
    console.log(data);
    return data;
}
const borrar = async (id) => {
    axios.delete(`http://localhost:8081/api/matricula/v1.0/estudiantes/${id}`).then(response => response.data);
}



export const consultarTodosFacade = async () => {
    return await consultarTodos();
}

export const consultarPorIdFacade = async (id) => {
    return await consultarPorId(id);
}
export const guardarFacade = async (estudiante) => {
    return await guardar(estudiante);
}
export const actualizarFacade = async (id, estudiante) => {
    return await actualizar(id, estudiante);
}
export const actualizarParcialFacade = async (id, estudiante) => {
    return await actualizarParcial(id, estudiante);
}
export const borrarFacade = async (id) => {
    await borrar(id);
}