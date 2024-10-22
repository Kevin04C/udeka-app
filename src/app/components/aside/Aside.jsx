import React from 'react';
import { NavLink } from 'react-router-dom';
// icons
import { BsBook, BsListUl, BsSearch, BsHouse, BsFileEarmarkText } from 'react-icons/bs';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { useScrollDown } from '../../../hooks/useScrollDown';
import { useDispatch } from 'react-redux';
import { readChoress, viewCompleteChores } from '../../../store/chores/thunks';
import { BiMessageAltMinus } from 'react-icons/bi';

const Aside = () => {
  const scrollDirection = useScrollDown();
  const dispatch = useDispatch();
  return (
    <aside className={`aside ${scrollDirection === 'down' ? 'aside--down' : 'aside--up'}`}>
      <div className='aside__links'>
        <NavLink
          to='/app/'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsHouse />
          Inicio
        </NavLink>

        <NavLink
          to='/app/courses'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsBook />
          Cursos
        </NavLink>
        <NavLink
          onClick={() => {
            dispatch(readChoress());
            dispatch(viewCompleteChores());
          }}
          to='/app/chores'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsListUl />
          Tareas
        </NavLink>
        <NavLink
          to='/app/search?q='
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsSearch />
          Buscar
        </NavLink>
        <NavLink
          to='/app/articles'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsFileEarmarkText />
          Artículos
        </NavLink>
        <NavLink
          to='/app/conciertos'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <IoMusicalNotesOutline />
          Conciertos
        </NavLink>
        <NavLink
          to='/app/ia'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BiMessageAltMinus />
          IA
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
