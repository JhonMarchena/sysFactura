import { api } from './api';

export const createUser = async (data: {
    nombre: string;
    apellido: string;
    correo: string;
    clave: string;
    edad: number;
    direccion: string;
    provincia: string;
    ciudad: string;
}) => { 
    return await api.post('/usuarios', data);
};

export const getUsers = async () => {
    return await api.get('/usuarios');
};