import { configureStore } from '@reduxjs/toolkit';
import { paradasSlice } from './paradas/paradasSlice';


export const store = configureStore({
    reducer: {
        paradas: paradasSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})