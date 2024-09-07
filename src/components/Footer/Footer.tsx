import { FooterSvgSelector } from "./FooterSvgSelector";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.text}>CONTACT</div>
          <div className={styles.text}>TERMS OF SERVICES</div>
          <div className={styles.text}>SHIPPING AND RETURNS</div>
        </div>
        <div className={styles.topRight}>
          <div>
            <input
              type="text"
              placeholder="Give an email, get the newsletter."
              className={styles.input}
            />
            <FooterSvgSelector id="arrow"></FooterSvgSelector>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          © 2021 Shelly. Terms of use and privacy policy.
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.in}>
            <FooterSvgSelector id="in"></FooterSvgSelector>
          </div>
          <div className={styles.facebook}>
            <FooterSvgSelector id="facebook"></FooterSvgSelector>
          </div>
          <div className={styles.inst}>
            <FooterSvgSelector id="inst"></FooterSvgSelector>
          </div>
          <div className={styles.tviter}>
            <FooterSvgSelector id="tviter"></FooterSvgSelector>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
