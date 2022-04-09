import defaultAxios from 'axios'

export const axios = defaultAxios.create({
    baseURL: 'http://localhost:3000/',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false,
});
