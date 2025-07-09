import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7231/api/launches',
})

export const getLaunchById = async (id: string) => {
    const response = await api.get(`/${id}`);
    return response.data;
}

export const getUpcomingLaunches = async () => {
    const response = await api.get('/upcoming');
    return response.data;
}

export const getPastLaunches = async () => {
    const response = await api.get('/past');
    return response.data;
}