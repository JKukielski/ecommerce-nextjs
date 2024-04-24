'use client';

import { BiHeart, BiUser, BiCart } from 'react-icons/bi';
import './links.css';
import { handleGoogleLogout } from '@utils/actions';
import Link from 'next/link';

const Links = ({ session }) => {
  return (
    <div className="navbar-icon-container">
      <BiUser className="navbar-icon" />
      <BiHeart className="navbar-icon" />
      <BiCart className="navbar-icon" />
      {session?.user ? (
        <form action={handleGoogleLogout}>
          <button className="navbar-log-btn">Logout</button>
        </form>
      ) : (
        <Link href="/login" className="navbar-log-btn">
          Login
        </Link>
      )}
    </div>
  );
};

export default Links;
