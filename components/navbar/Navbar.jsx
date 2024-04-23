import { BiHeart, BiUser, BiCart, BiPackage } from 'react-icons/bi';
import './navbar.css';
import SearchInput from '@components/searchInput/SearchInput';
import Links from './links/links';
import { auth } from '@utils/auth';

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="navbar-container">
      <div className="navbar-container-top">
        <div className="navbar-logo-container">
          <BiPackage className="navbar-logo-icon" />
          <h1 className="navbar-logo-text">SHOPPER</h1>
        </div>
        <Links session={session} />
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
