import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import FormSendMessage from '../components/Ia/FormSendMessage';
import OpenIaMessaje from '../components/Ia/OpenIaMessaje';
import MessageFromMe from '../components/Ia/MessageFromMe';
import { useEffect } from 'react';

const IaPage = () => {
  const { mensajes } = useSelector((state) => state.ia);
  const refMessages = useRef(null);

  useEffect(() => {
    if (mensajes.length) {
      refMessages.current.scrollTo({
        top: refMessages.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [mensajes]);

  return (
    <div className='h-[calc(100vh-8rem)] flex flex-col gap-4'>
      <div className='grow-[2]'></div>

      <div className='overflow-y-auto grow-' ref={refMessages}>
        <div className='w-full'>
          {mensajes.map(({ message, isMe }, index) =>
            isMe ? (
              <MessageFromMe message={message} key={index} />
            ) : (
              <OpenIaMessaje message={message} key={index} />
            ),
          )}
        </div>
      </div>
      <FormSendMessage />
    </div>
  );
};

export default IaPage;
