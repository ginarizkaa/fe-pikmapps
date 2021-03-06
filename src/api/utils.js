import axios from 'axios'

const API_URL= 'http://localhost:3000/api';

export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': 'localhost:8080',
            'Content-Type': 'application/json'
        }
    })
}


