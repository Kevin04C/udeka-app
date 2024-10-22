import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import { onSetConciertos, onSetLoadingConciertos } from './conciertosSlice';

export const obtenerConciertos = () => {
  return async (dispatch) => {
    dispatch(onSetLoadingConciertos(true));
    try {
      const { data: response } = await AppEstudiantesApi.get('/conciertos');
      dispatch(onSetConciertos(response.data));
      dispatch(onSetLoadingConciertos(false));
    } catch (error) {
      dispatch(onSetLoadingConciertos(false));
    }
  };
};
