import styles from "./Home.module.css";
import NavBar from "../components/NavBar";
import droneFootage from "../assets/ClippedFootage.mp4";
import House from "../assets/HeaderHouse.png";
import MeetHosts from "../components/MeetHosts";
import BackgroundLine from "../components/BackgroundLine";
import RevenueProjection from "../components/RevenueProjection";

function Home() {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeHeaderContainer}>
        <div className={styles.NavBar}>
          <NavBar />
        </div>
        <div className={styles.HomeHeader}>
          <div className={styles.House}>
            <div className={styles.OptionsContainer}>
              <div className={styles.BookStay}>Book Your Stay</div>
              <div className={styles.PartnerWithUs}>Partner With Us</div>
            </div>
            <img src={House} />
          </div>
          <video autoPlay muted loop playsInline width="100%" height="auto">
            <source src={droneFootage} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.HomeBody}>
        <div className={styles.MeetHostsContainer}>
          <MeetHosts />
        </div>
        <div className={styles.RevenueProjectionContainer}>
          <RevenueProjection />
        </div>
      </div>
      <BackgroundLine
        width={200}
        height={100}
        degree="rotate(35deg)"
        top={960}
      />
    </div>
  );
}

export default Home;
