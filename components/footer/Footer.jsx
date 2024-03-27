import './footer.css';
import {
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoTiktok,
  BiLogoYoutube,
  BiPackage,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-inner-container">
          <h3 className="footer-subheading">CATEGORIES</h3>
          <p className="footer-link">Men</p>
          <p className="footer-link">Women</p>
          <p className="footer-link">Accessories</p>
        </div>
        <div className="footer-inner-container">
          <h3 className="footer-subheading">ABOUT</h3>
          <p className="footer-link">Careers</p>
          <p className="footer-link">Our responsibilities</p>
          <p className="footer-link">Media</p>
          <p className="footer-link">Investments</p>
        </div>
        <div className="footer-inner-container">
          <h3 className="footer-subheading">HELP</h3>
          <p className="footer-link">Customer service</p>
          <p className="footer-link">My Shopper</p>
          <p className="footer-link">Find a store</p>
          <p className="footer-link">Terms & conditions</p>
          <p className="footer-link">Contact</p>
          <p className="footer-link">Gift cards</p>
        </div>
      </div>
      <div className="footer-icon-container">
        <BiLogoFacebook className="footer-social-icon" />
        <BiLogoInstagram className="footer-social-icon" />
        <BiLogoTiktok className="footer-social-icon" />
        <BiLogoYoutube className="footer-social-icon" />
      </div>
      <div className="footer-logo-container">
        <BiPackage className="footer-logo-icon" />
        <h1 className="footer-logo-text">SHOPPER</h1>
      </div>
    </div>
  );
};

export default Footer;
