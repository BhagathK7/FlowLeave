import axios from "axios";

const api = axios.create({
    baseURL: "https://flowleave-backend-vgiz.onrender.com/api"
});

export default api;
