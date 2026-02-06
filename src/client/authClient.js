import axios from 'axios';
const URL = "http://localhost:8082/auth/token";

export const obtenerToken = async ({ user, password }) => {
    const data = axios.get(`${URL}?user=${user}&password=${password}`).then(response => response.data);
    return data;
}

export const obtenerTokenFacade = async ({ user, password }) => {
    return await obtenerToken({ user, password });
}

