import styles from "./RevenueProjection.module.css";

function RevenueProjection() {
  return (
    <div className={styles.RevenueSectionContainer}>
      <div className={styles.TitleContainer}>
        <div className={styles.CenteredText}>
          Ready for a <span className={styles.FreeText}>free</span> revenue
        </div>
        <div className={styles.CenteredText}>projection on your property?</div>
      </div>
      <div className={styles.MiddleTextContainer}>
        <p>
          Whether you are a home owner and looking to take advantage of your
          properties potential or an investor looking to maximize your
          properties revenue...
        </p>
        <h3>We are here to help!</h3>
      </div>
      <div className={styles.ButtonContainer}>
        <div>Submit a Request</div>
        <div>Book a Call</div>
      </div>
    </div>
  );
}

export default RevenueProjection;
