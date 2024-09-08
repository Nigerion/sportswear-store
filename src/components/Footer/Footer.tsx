import { Link } from "react-router-dom";
import { IconSvgSelector } from "../../IconSvgSelector/IconSvgSelector";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <Link to="/" className={styles.link}>
            CONTACT
          </Link>
          <Link to="/" className={styles.link}>
            TERMS OF SERVICES
          </Link>
          <Link to="/" className={styles.link}>
            SHIPPING AND RETURNS
          </Link>
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
          © 2021 Shelly. <span className={styles.word}>Terms of use </span> and{" "}
          <span className={styles.word}>privacy policy.</span>
        </div>
        <div className={styles.bottomRight}>
          <Link to="/" className={styles.in}>
            <IconSvgSelector name="in"></IconSvgSelector>
          </Link>
          <Link to="/" className={styles.facebook}>
            <IconSvgSelector name="facebook"></IconSvgSelector>
          </Link>
          <Link to="/" className={styles.inst}>
            <IconSvgSelector name="inst"></IconSvgSelector>
          </Link>
          <Link to="/" className={styles.tviter}>
            <IconSvgSelector name="tviter"></IconSvgSelector>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
