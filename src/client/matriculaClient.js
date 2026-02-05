import axios from 'axios';
import { obtenerTokenFacade } from './authClient';
const tokenData = await obtenerTokenFacade();
const token = tokenData.accessToken;
const BaseUrl = 'http://localhost:8081/api/matricula/v1.0/estudiantes';

const consultarTodos = async () => {
    console.log("Token en matriculaClient:", token);
    const data = axios.get(BaseUrl, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    return data;
}

const consultarPorId = async (id) => {
    const data = axios.get(`${BaseUrl}/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    return data;
}
const guardar = async (estudiante) => {


    const data = axios.post(BaseUrl, estudiante, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    console.log(data);
    return data;
}
const actualizar = async (id, estudiante) => {
    const data = axios.put(`${BaseUrl}/${id}`, estudiante, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    console.log(data);
    return data;
}
const actualizarParcial = async (id, estudiante) => {
    const data = axios.patch(`${BaseUrl}/${id}`, estudiante, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    console.log(data);
    return data;
}
const borrar = async (id) => {
    axios.delete(`${BaseUrl}/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
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