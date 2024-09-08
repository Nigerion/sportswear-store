import { IconSvgSelector } from "../../IconSvgSelector/IconSvgSelector";
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
            <IconSvgSelector name="arrow"></IconSvgSelector>
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
            <IconSvgSelector name="in"></IconSvgSelector>
          </div>
          <div className={styles.facebook}>
            <IconSvgSelector name="facebook"></IconSvgSelector>
          </div>
          <div className={styles.inst}>
            <IconSvgSelector name="inst"></IconSvgSelector>
          </div>
          <div className={styles.tviter}>
            <IconSvgSelector name="tviter"></IconSvgSelector>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
