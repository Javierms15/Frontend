import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_NOMINATIM_URL } = getEnvVariables()

const nominatimApi = axios.create({
    baseURL: VITE_API_NOMINATIM_URL
});

export default nominatimApi;


