import {
  BsSearch,
  BsCart3,
  BsPerson,
  BsHeart,
  BsBox2HeartFill,
} from 'react-icons/bs';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-top">
        <div className="navbar-logo-container">
          <BsBox2HeartFill className="navbar-logo-icon" />
          <h1 className="navbar-logo-text">SHOPPER</h1>
        </div>
        <div className="navbar-icon-container">
          <BsPerson className="navbar-icon" />
          <BsHeart className="navbar-icon" />
          <BsCart3 className="navbar-icon" />
        </div>
      </div>
      <div className="navbar-container-bottom"></div>
    </div>
  );
};

export default Navbar;
