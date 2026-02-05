import axios from 'axios';
const user = "adm1";
const password = "1234a";

export const obtenerToken = async () => {
    const data = axios.get(`http://localhost:8082/auth/token?user=${user}&password=${password}`).then(response => response.data);
    return data;
}

export const obtenerTokenFacade = async () => {
    return await obtenerToken();
}

