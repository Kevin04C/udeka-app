import { createSlice } from '@reduxjs/toolkit';

export const conciertosSlice = createSlice({
  name: 'conciertos',
  initialState: {
    conciertos: [],
    loading: false,
    messageSuccess: null,
    menssageError: null,
  },
  reducers: {
    onSetLoadingConciertos: (state, { payload }) => {
      state.loading = payload;
    },
    onSetConciertos: (state, { payload }) => {
      state.conciertos = payload;
    },
  },
});

export const { onSetLoadingConciertos, onSetConciertos } = conciertosSlice.actions;
