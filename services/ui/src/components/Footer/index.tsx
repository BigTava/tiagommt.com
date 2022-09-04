import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import "./index.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Tiago
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EGACTOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
