import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import searchSlice from './search/searchSlice';
import articleSlice from './articles/articleSlice';
import { choresSlice } from './chores/choresSlice';
import { uiSlice } from './ui/uiSlice';
import courseSlice from './courses/courseSlice';
import { conciertosSlice } from './conciertos/conciertosSlice';
import iaSlice from './ia/iaSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    search: searchSlice.reducer,
    articles: articleSlice.reducer,
    chores: choresSlice.reducer,
    ui: uiSlice.reducer,
    courses: courseSlice.reducer,
    conciertos: conciertosSlice.reducer,
    ia: iaSlice.reducer,
  },
});
