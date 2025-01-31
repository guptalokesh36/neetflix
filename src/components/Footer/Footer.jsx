import "./Footer.css";
import facebook_icon from "../../assets/brands-facebook.svg";
import instagram_icon from "../../assets/brands-instagram.svg";
import twitter_icon from "../../assets/brands-twitter.svg";
import youtube_icon from "../../assets/brands-youtube.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="facebook" />
        <img src={instagram_icon} alt="instagram" />
        <img src={twitter_icon} alt="twitter" />
        <img src={youtube_icon} alt="youtube" />
      </div>

      <ul>
        <li>Auto Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Investor Relations</li>
        <li>Media Centre</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="copyright-text">&copy; 1997 - 2025 Netflix  Inc.</p>
    </div>
  );
}
