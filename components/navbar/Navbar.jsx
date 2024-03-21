import { BiHeart, BiUser, BiCart, BiPackage } from 'react-icons/bi';
import './navbar.css';
import SearchInput from '@components/searchInput/SearchInput';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-top">
        <div className="navbar-logo-container">
          <BiPackage className="navbar-logo-icon" />
          <h1 className="navbar-logo-text">SHOPPER</h1>
        </div>
        <div className="navbar-icon-container">
          <BiUser className="navbar-icon" />
          <BiHeart className="navbar-icon" />
          <BiCart className="navbar-icon" />
        </div>
      </div>
      <div className="navbar-container-bottom">
        <ul className="navbar-categories">
          <li className="navbar-category">Man</li>
          <li className="navbar-category">Woman</li>
          <li className="navbar-category">Accessories</li>
        </ul>
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
