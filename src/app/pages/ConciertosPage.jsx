import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerConciertos } from '../../store/conciertos/thunks';
import ConciertoCart from '../components/Conciertos/ConciertoCart';

const ConciertosPage = () => {
  const dispatch = useDispatch();
  const { conciertos } = useSelector((state) => state.conciertos);

  console.log(conciertos);

  useEffect(() => {
    dispatch(obtenerConciertos());
  }, []);

  return (
    <div className='mb-32'>
      <h3 className='text-2xl md:text-3xl mb-8 font-extrabold uppercase text-white'>
        Próximos conciertos en Perú
      </h3>
      <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
        {conciertos?.map((concierto) => (
          <ConciertoCart concierto={concierto} />
        ))}
      </div>
    </div>
  );
};

export default ConciertosPage;
