import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import { onNuevoMensaje, onSetEnviandoMensaje } from './iaSlice';

export const sendMessageOpenIa = ({ message, isMe }) => {
  return async (dispatch) => {
    dispatch(onSetEnviandoMensaje(true));
    try {
      const body = {
        contentMessage: message,
      };
      const { data: response } = await AppEstudiantesApi.post('/openia', body);
      const responseOpenIa = response.data;
      dispatch(onSetEnviandoMensaje(false));

      const nuevoMensaje = {
        message: responseOpenIa,
        isMe,
      };

      console.log('--Nuevo mensaje--');
      console.log(nuevoMensaje);

      dispatch(onSetEnviandoMensaje(true));
      dispatch(onNuevoMensaje(nuevoMensaje));
    } catch (error) {
      dispatch(onSetEnviandoMensaje(true));
    }
  };
};
