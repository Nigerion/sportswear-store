import styles from "./App-header.module.css";
import { IconSvgSelector } from "../../IconSvgSelector/IconSvgSelector";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className={styles.conteiner}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logo_letter}>S</span>HOPPE
      </Link>
      <div className={styles.right}>
        <Link to="/shop" className={styles.link}>
          Shop
        </Link>
        <Link to="/blog" className={styles.link}>
          Blog
        </Link>
        <Link to="/story" className={styles.link}>
          Our Story
        </Link>
        <div className={styles.line}></div>
        <Link to="/search">
          <IconSvgSelector name="magnifier" />
        </Link>
        <Link to="/shopping">
          <IconSvgSelector name="shopping" />
        </Link>
        <Link to="/user">
          <IconSvgSelector name="people" />
        </Link>
      </div>
    </div>
  );
};

export default AppHeader;
