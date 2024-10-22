import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mensajes: [],
  enviandoMensaje: false,
  error: null,
};

const iaSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    onSetEnviandoMensaje(state, { payload }) {
      state.enviandoMensaje = payload;
    },
    onNuevoMensaje(state, { payload }) {
      const newMensajes = state.mensajes.slice();
      newMensajes.push(payload);
      state.mensajes = newMensajes;
    },
  },
});

export const { onSetEnviandoMensaje, onNuevoMensaje } = iaSlice.actions;
export default iaSlice;
