import axios from 'axios';
import { obtenerTokenFacade } from './authClient';

const BaseUrl = 'http://localhost:8081/api/matricula/v1.0/estudiantes';

// Cache del token (no global del proyecto, sino del módulo)
let cachedToken = null;
let tokenPromise = null;

// Función para obtener el token solo una vez
const getToken = async () => {
    if (cachedToken) {
        return cachedToken;
    }

    if (tokenPromise) {
        return tokenPromise;
    }

    tokenPromise = obtenerTokenFacade().then(tokenData => {
        cachedToken = tokenData.accessToken;
        tokenPromise = null;
        console.log("Token obtenido una sola vez:", cachedToken);
        return cachedToken;
    });

    return tokenPromise;
};

const consultarTodos = async () => {
    const token = await getToken();
    console.log("Token en matriculaClient:", token);
    const data = axios.get(BaseUrl, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    return data;
}

const consultarPorId = async (id) => {
    const token = await getToken();
    const data = axios.get(`${BaseUrl}/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    return data;
}
const guardar = async (estudiante) => {
    const token = await getToken();

    const data = axios.post(BaseUrl, estudiante, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    console.log(data);
    return data;
}
const actualizar = async (id, estudiante) => {
    const token = await getToken();
    const data = axios.put(`${BaseUrl}/${id}`, estudiante, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    console.log(data);
    return data;
}
const actualizarParcial = async (id, estudiante) => {
    const token = await getToken();
    const data = axios.patch(`${BaseUrl}/${id}`, estudiante, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
    console.log(data);
    return data;
}
const borrar = async (id) => {
    const token = await getToken();
    axios.delete(`${BaseUrl}/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.data);
}


// Función de inicialización para usar en mounted
export const inicializarAuth = async () => {
    await getToken();
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