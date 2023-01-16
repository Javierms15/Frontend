import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_PARADA_URL } = getEnvVariables()

const paradaApi = axios.create({
    baseURL: VITE_API_PARADA_URL,
    // headers: {'Authorization': `Bearer ${sessionStorage.getItem("token")}`}
});

export default paradaApi;