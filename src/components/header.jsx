import clsx from 'clsx';
import '../index.css';
import LunicoLogo from './icons/logo';
import MainButton from './main-button';

const Header = (className) => {
  return (
      <header className={clsx('top-0 w-full fixed flex items-center justify-center gap-64 py-6 text-center', className)}>
      <LunicoLogo />
      <nav>
        <ul className="flex gap-6 text-white text-sm font-semibold">
          <li><a href="#">Menus</a></li>
          <li><a href="#">Restaurant</a></li>
          <li><a href="#">Bar</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <MainButton>Book Now</MainButton>
    </header>
  );
};

export default Header;