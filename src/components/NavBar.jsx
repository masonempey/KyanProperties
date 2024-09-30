import styles from "./NavBar.module.css";
import logo from "../assets/kyanlogo.png";
import ProfileLogo from "../assets/ProfileLogo.png";

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.NavContent}>
        <div className={styles.LogoContainer}>
          <div className={styles.Logo}>
            <img src={logo} />
          </div>
          <div className={styles.LogoLine}></div>
          <div className={styles.SpanContainer}>
            <span>Kyan</span>
            <span>Properties</span>
          </div>
        </div>
        <nav className={styles.NavItems}>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Properties">Properties</a>
          <a href="#Contact">Contact</a>
          <a href="#Blog">Blog</a>
          <a href="#Services">Services</a>
        </nav>
        <div className={styles.Profile}>
          <img src={ProfileLogo} />
        </div>
      </div>
      <div className={styles.BottomLine}></div>
    </nav>
  );
}

export default NavBar;
