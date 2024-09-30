import styles from "./MeetHosts.module.css";
import KyleAndAndrew from "../assets/KyleandAndrew.jpg";

function MeetHosts() {
  return (
    <div className={styles.MeetHostsContainer}>
      <div className={styles.PhotoContainer}>
        <img src={KyleAndAndrew} className={styles.HostPhoto} />
      </div>
      <div className={styles.MiddleLineContainer}>
        <div className={styles.TopLine}></div>
        <div className={styles.BottomLine}></div>
      </div>
      <div className={styles.ContentContainer}>
        <h1>Meet Your Hosts</h1>
        <h2>Kyan Properties</h2>
        <p>
          We started KYAN Properties in hopes of helping homeowners get the most
          out of their rental properties. Fast forward; we are currently
          positioned as a top 50 host in Western Canada. Our portfolio spans
          North America, and we are confident in our ability to help create
          top-performing short-term rental properties. We have extensively
          analyzed the real estate market and found an alternative method to
          traditional rental properties. Through short-term rental platforms,
          dedicated hospitality services, and in-depth knowledge of back-end
          software, we can help owners maximize profit on their properties! Our
          goal is to help you become entirely hands-off while maintaining the
          integrity of your property and gaining more profit than owners would
          see through renting. Book your consultation with us today!
        </p>
        <div className={styles.ContentBottomLine}></div>
      </div>
    </div>
  );
}

export default MeetHosts;
