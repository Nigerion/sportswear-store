import Card from "../ui/Card/Card";
import styles from "./HomePage.module.css";

const card = [
  { image: "Lira Earrings", name: "Lira Earrings ", price: "20,00" },
  { image: "Hal Earrings", name: "Hal Earrings ", price: "25,00" },
  {
    image: "Kaede Hair Pin Set Of 3 ",
    name: "Kaede Hair Pin Set Of 3  ",
    price: "30,00",
  },
  { image: "Hair Pin Set of 3", name: "Hair Pin Set of 3", price: "45,00" },
  { image: "Plaine Necklace", name: "Plaine Necklace ", price: "19,00" },
  {
    image: "Yuki Hair Pin Set of 3",
    name: "Yuki Hair Pin Set of 3 ",
    price: "29,00",
  },
];
const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.name}>Gold big hoops </div>
        <div className={styles.price}>$ 68,00</div>
        <button className={styles.button}>View Product</button>
      </div>
      <div>
        <div className={styles.content}>
          <div className={styles.title}>Shop The Latest</div>
          <div className={styles.link}>View All</div>
        </div>
        <div className={styles.cards}>
          {card.map(({ image, name, price }) => (
            <Card image={image} name={name} price={price} key={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
