import MarkdownIt from 'markdown-it';
import React from 'react';
import { useSelector } from 'react-redux';

const MessageFromMe = ({ message }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className='mb-4'>
      <div className='flex gap-4 w-full flex-row-reverse'>
        <div className='flex gap-4 w-[520px]'>
          <div className='w-full flex justify-end gap-4'>
            <div className='text-sm bg-gray-700 rounded-3xl text-white px-6 py-2'>{message}</div>
            <img src={user.image} alt='Usuario' className='w-10 h-10 rounded-full' />
          </div>
        </div>
        <div className='flex-grow'></div>
      </div>
    </div>
  );
};

export default MessageFromMe;
