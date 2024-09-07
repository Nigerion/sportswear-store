// import React from "react";
import image from "../../../assets/img.png";
import styles from "./Card.module.css";

interface Props {
  image: string;
  name: string;
  price: string;
}
const Card = (props: Props) => {
  return (
    <div className={styles.box}>
      <div className={styles.img}>
        <img src={image} alt="картинк товара" />
      </div>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.price}>{`$ ${props.price}`}</div>
    </div>
  );
};

export default Card;
