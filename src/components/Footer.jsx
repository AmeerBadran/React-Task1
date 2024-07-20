import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import HomeButton from "./SmallComponents/HomeButton";

export default function Footer() {
  return (
    <footer className="footer-style">
      <div className="top-footer">
        <p className="footer-left-text">©2023 Yourcompany</p>
        <h1 className="page-title">Landing</h1>
        <HomeButton buttonText={"Purchase now"} />
      </div>
      <hr className="footer-hr"></hr>
      <div className="footer-bottom">
        <div className="footer-Links">
          <a href="/">
            Home
          </a>
          <a href="/">
            About
          </a>
          <a href="/">
            Contact
          </a>
        </div>
        <div className="footer-Links fontSize">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.youtube.com">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
}
