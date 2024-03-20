import { BiHeart, BiUser, BiCart, BiSearch, BiPackage } from 'react-icons/bi';
import './navbar.css';

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
        <div className="navbar-search-container">
          <input
            className="navbar-search-input"
            type="text"
            placeholder="Search..."
          />
          <BiSearch className="navbar-search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
