
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8085/barber-application/v1'
})

export default api