import React from "react";
import styles from "./App-header.module.css";
import { HeaderSvgSelector } from "./HeaderSvgSelector";
const AppHeader = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.logo}>SHOPPE</div>
      <div className={styles.right}>
        <div className={styles.shop}>Shop</div>
        <div className={styles.blog}>Blog</div>
        <div className={styles.story}>Our Story</div>
        <div className={styles.line}></div>
        <div>
          <HeaderSvgSelector id="magnifier" />
        </div>
        <div>
          <HeaderSvgSelector id="shopping" />
        </div>
        <div>
          <HeaderSvgSelector id="people" />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
