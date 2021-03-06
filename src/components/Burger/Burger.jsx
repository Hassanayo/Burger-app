import React from "react";
import styles from "./burger.module.css";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div>
      <div className={styles.Burger}>
        <BurgerIngredients type="bread-top" />
        {transformedIngredients}
        <BurgerIngredients type="bread-bottom" />
      </div>
    </div>
  );
}

export default Burger;
