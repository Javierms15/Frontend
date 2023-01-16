import { createSlice } from '@reduxjs/toolkit';


export const paradasSlice = createSlice({
    name: 'paradas',
    initialState: {
        paradas: [],
    },
    reducers: {
        onSetParadas: (state, {payload}) => {
            state.paradas = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetParada } = paradasSlice.actions;