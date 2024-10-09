import styles from "./WhyChooseKyan.module.css";
import WhyImage from "../assets/WhyChooseImage.png";
import OmniImage from "../assets/Omnichannel.png";
import MoneyBag from "../assets/MoneyBag.png";
import HeadSet from "../assets/Headset.png";

function WhyChooseKyan() {
  return (
    <div className={styles.WhyChooseKyanContainer}>
      <h1>Why Choose Kyan?</h1>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.CardInner}>
            <div className={styles.CardFront}>
              <img src={MoneyBag} />
              <p>Proven To Maximize Revenues</p>
              <div className={styles.FrontCardDots}>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={styles.CardBack}>
              <p>THIS IS WHY</p>
              <div className={styles.BackCardDots}>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.CardInner}>
            <div className={styles.CardFront}>
              <img src={OmniImage} />
              <p>Professional Marketing</p>
              <div className={styles.FrontCardDots}>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={styles.CardBack}>
              <p>THIS IS WHY</p>
              <div className={styles.BackCardDots}>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.CardInner}>
            <div className={styles.CardFront}>
              <img src={HeadSet} />
              <p>Professional Customer Service</p>
              <div className={styles.FrontCardDots}>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={styles.CardBack}>
              <p>THIS IS WHY</p>
              <div className={styles.BackCardDots}>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ovaleffect}></div>
      <img src={WhyImage} />
    </div>
  );
}

export default WhyChooseKyan;
