import styles from "./Footer.module.css";
import FooterImage from "../assets/FooterImage.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.FooterContent}>
        <div className={styles.SectionOne}>
          <div className={styles.Title}>
            <div className={styles.LeftLine}></div>
            <p>Quick Links</p>
            <div className={styles.UnderLine}></div>
          </div>
          <div className={styles.Content}>
            <li>About Us</li>
            <li>Property Management</li>
            <li>Blog</li>
            <li>Book With Kyan</li>
            <li>Partner With Kyan</li>
          </div>
        </div>
        <div className={styles.SectionTwo}>
          <div className={styles.Title}>
            <div className={styles.LeftLine}></div>
            <p>Get In Touch</p>
            <div className={styles.UnderLine}></div>
          </div>
          <div className={styles.Content}>
            <div>
              <img src={Location} />
              <li>1917 10 Ave SW, Calgary, AB T3C 0J8</li>
            </div>
            <div>
              <img src={Phone} />
              <li>(403) 975-2938</li>
            </div>
          </div>
          <div className={styles.Title}>
            <div className={styles.LeftLine}></div>
            <p>Social Media</p>
            <div className={styles.UnderLine}></div>
          </div>
          <div className={styles.Content}>
            <div>
              <img src={Facebook} />
              <li>Facebook</li>
            </div>
            <div>
              <img src={Instagram} />
              <li>Instagram</li>
            </div>
          </div>
        </div>
        <div className={styles.SectionThree}>
          <div className={styles.Title}>
            <p>Properties</p>
          </div>
          <div className={styles.Content}>
            <li>Calgary</li>
            <li>Invermere</li>
            <li>Kelowna</li>
            <li>Outside Canada</li>
          </div>
          <div className={styles.Button}>Partner With Us</div>
        </div>
        <div className={styles.SectionFour}>
          <div className={styles.Title}>
            <div className={styles.LeftLine}></div>
            <p>Newsletter</p>
            <div className={styles.UnderLine}></div>
          </div>
          <div className={styles.Button}>Stay Informed</div>
        </div>
      </div>
      <div className={styles.FooterImageContainer}>
        <img src={FooterImage} />
      </div>
    </footer>
  );
};

export default Footer;
