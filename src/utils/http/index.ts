import axios from "axios";

const HTTP = axios.create({
    baseURL: import.meta.env.VITE_HOST_API,
})

HTTP.interceptors.request.use((request) => {
    const token = localStorage.getItem("token")
    if (token) request.headers.Authorization = `Bearer ${token}`
    return request;
})

export const HttpPost = async (url: string, params: {}) => {
    try {
        const res = await HTTP.post(url, params).catch((error) => {
            return {
                status: error.response.status,
                data: error.response.data,
            }
        })
        return {
            status: res.status,
            data: res.data
        }
    } catch (error: any) {
        return error.response
    }
};