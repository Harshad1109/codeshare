import './styles/Footer.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="https://github.com/Harshad1109" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/harshadkumar-solanki-84547a259/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} CodeShare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;