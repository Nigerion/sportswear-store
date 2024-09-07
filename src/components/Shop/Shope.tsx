import React from "react";
import styles from "./Shope.module.css";
type Props = {};

const Shope = (props: Props) => {
  return (
    <section>
      <h2>Shop The Latest</h2>
      <div className={styles.gg}>
        <input type="text" placeholder="Search...">
          {/* <div>asd</div> */}
        </input>
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <div className={styles.slidecontainer}>
          <input
            type="range"
            min="1"
            max="100"
            // value="50"
            className={styles.slider}
            id="myRange"
          />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Shope;
