import axios from "axios";
import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
        const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmY3Mzc4YTI2YTA4NDIxM2RlZGI3MGQwMGYxYWQ0ZSIsInN1YiI6IjYzZWU4OWE5ZDA0ZDFhMDA4MzEzZWQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZGTsVPN4urJWEsjYg_dAlg6qIDhqe9JOHiu_vSLBt4';
        config.headers.Authorization = `Bearer ${access}`
    return config
})

export {
    apiService
}