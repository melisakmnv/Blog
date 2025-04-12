import axios from "axios";


const baseUrl = import.meta.env.VITE_BASE_URL
export const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});



