import '../index.css';
import LunicoLogo from './icons/logo';
import MainButton from './main-button';

const Header = () => {
  return (
    <header>
      <LunicoLogo />
      <ul>
        <li><a href='#'>Menus</a></li>
        <li><a href='#'>Restaurant</a></li>
        <li><a href='#'>Bar</a></li>
        <li><a href='#'>Contact Us</a></li>
      </ul>
      <MainButton>Book Now</MainButton>
    </header>
  );
};

export default Header;