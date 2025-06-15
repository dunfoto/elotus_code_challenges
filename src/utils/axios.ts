import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_TMDB_BASE_URL ?? 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
});

export default axiosInstance;