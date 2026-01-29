import axios from 'axios';

const consultarTodos = () => {
    const data = axios.get('http://localhost:8080/api/matricula/v1.0/estudiantes').then(response => response.data);
    return data;
}