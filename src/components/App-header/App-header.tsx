import styles from "./App-header.module.css";
import { IconSvgSelector } from "../../IconSvgSelector/IconSvgSelector";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.logo}>
        <Link to="/">SHOPPE</Link>
      </div>
      <div className={styles.right}>
        <div className={styles.shop}>
          <Link to="/shop">Shop</Link>
        </div>
        <div className={styles.blog}>
          <Link to="/blog">Blog</Link>
        </div>
        <div className={styles.story}>
          <Link to="/story">Our Story</Link>
        </div>
        <div className={styles.line}></div>
        <div>
          <Link to="/search">
            <IconSvgSelector name="magnifier" />
          </Link>
        </div>
        <div>
          <Link to="/shopping">
            <IconSvgSelector name="shopping" />
          </Link>
        </div>
        <div>
          <Link to="/user">
            <IconSvgSelector name="people" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
