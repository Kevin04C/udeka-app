import React, { useRef } from 'react';
import { IoSend } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { sendMessageOpenIa } from '../../../store/ia/thunks.';
import { onNuevoMensaje } from '../../../store/ia/iaSlice';

const FormSendMessage = () => {
  const textareaRef = useRef(null);
  const dispath = useDispatch();

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = '40px';
    if (textarea.scrollHeight <= 160) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    } else {
      textarea.style.height = '160px';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const message = textareaRef.current.value;

    if (message.trim()) {
      // Llamar a la API aquí
      console.log('Enviando mensaje:', message);

      /** Guarda primero mi pregunta en el store */
      const payload = {
        message,
        isMe: true,
      };
      dispath(onNuevoMensaje(payload));

      /** Ahora se hace la peticion al back */
      const payloadOpenIa = {
        message,
        isMe: false,
      };

      dispath(sendMessageOpenIa(payloadOpenIa));

      // Restablecer el textarea
      textareaRef.current.value = '';
      handleInput(); // Ajustar la altura del textarea nuevamente
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit(event);
    }
  };

  return (
    <form
      className='bg-background py-3 px-6 rounded-3xl flex items-center min-h-16'
      onSubmit={handleSubmit}
    >
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        onKeyDown={handleKeyDown} // Agregar manejador de tecla
        className='outline-none text-base placeholder-paragraph h-[40px] max-h-40  bg-transparent grow overflow-y-auto'
        placeholder='Envía un mensaje'
        style={{ resize: 'none' }}
      />
      <button type='submit' className='bg-stroke w-12 h-12 rounded-full'>
        <IoSend className='text-xl text-center mx-auto' />
      </button>
    </form>
  );
};

export default FormSendMessage;
