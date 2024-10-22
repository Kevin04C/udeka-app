import { Link } from 'react-router-dom';
import Profile from './Profile';
import Searcher from './Searcher';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <Link to='/app/' className='header__logo'>
          <span>U</span> DEKA
        </Link>
        <Searcher />
      </div>
      <div className='header__right'>
        <Profile />
      </div>
    </header>
  );
};

export default Header;
