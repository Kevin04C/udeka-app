import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { CiClock2 } from 'react-icons/ci';
import DateUtility from '../../../shared/services/DateUtility.service';

const ConciertoCart = ({ concierto }) => {
  const { thumbnail, name, start_time } = concierto;
  const thumbnailDefault =
    'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg';
  let imagenConcierto = thumbnail;
  let informacionEvento = '';

  if (!imagenConcierto) {
    imagenConcierto = thumbnailDefault;
  }

  if (concierto.info_links.legth > 0) {
    informacionEvento = concierto.info_links[0].link;
  }

  return (
    <div className='px-2 py-4 bg-[#232946] rounded-3xl flex flex-col'>
      <div className='mb-2'>
        <img src={imagenConcierto} alt='' className='w-full h-[220px] rounded-3xl' />
      </div>
      <div className='mb-2 grow'>
        <h4 className='font-semibold text-xl text-white'>{name}</h4>

        <div className='flex gap-2 items-center mb2-'>
          <CiLocationOn className='text-base' />
          <p className='text-sm'>Circuito de Playas - San Migue</p>
        </div>

        <div className='flex gap-2'>
          <CiClock2 />
          <p className='text-sm'>{DateUtility.formatearFechayHora(start_time)}</p>
        </div>
      </div>

      {imagenConcierto && (
        <div className='w-full'>
          <a className='bg-button text-button-text px-4 py-2 rounded-3xl font-semibold w-full uppercase text-sm hover:contrast-150'>
            Más información
          </a>
        </div>
      )}
    </div>
  );
};

export default ConciertoCart;
