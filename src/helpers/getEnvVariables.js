export const getEnvVariables = () => {

    // import.meta.env;

    return {
        // ...import.meta.env
        VITE_API_PARADA_URL: import.meta.env.VITE_API_PARADA_URL,
        VITE_API_NOMINATIM_URL: import.meta.env.VITE_API_NOMINATIM_URL,
        VITE_CLOUD: import.meta.env.VITE_CLOUD,
        VITE_UPLOAD_PRESET: import.meta.env.VITE_UPLOAD_PRESET
    }
}