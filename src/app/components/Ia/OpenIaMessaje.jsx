import MarkdownIt from 'markdown-it';
import React from 'react';

const md = new MarkdownIt();

const OpenIaMessaje = ({ message }) => {
  const textAsHtml = md.render(message);

  return (
    <div className='mb-4'>
      <div className='flex gap-4 mb-10'>
        <img
          src='https://media.istockphoto.com/id/1957053641/vector/cute-kawaii-robot-character-friendly-chat-bot-assistant-for-online-applications-cartoon.jpg?s=612x612&w=0&k=20&c=Uf7lcu3I_ZNQvjBWxlFenRX7FuG_PKVJ4y1Y11aTZUc='
          alt='Bot'
          className='w-10 h-10 rounded-full'
        />
        <div
          className='text-sm'
          dangerouslySetInnerHTML={{ __html: textAsHtml }}
          style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5' }} // Respetar espacios y saltos de línea
        ></div>
      </div>
    </div>
  );
};

export default OpenIaMessaje;
