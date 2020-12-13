import React from "react";
import Ingredients from "./Ingredients";
import shortid from "shortid";
//import IngredientsList from "./IngredientsList";
//import { render } from "@testing-library/react";

const BurgerStack = ({ burgerStackList }) => {
  const renderList = burgerStackList.map(( ingredient ) => {
      console.log(ingredient)
    return <Ingredients key={shortid.generate()} name={ingredient.name} />;
  });
console.log(burgerStackList)
  return (
    <div>
      BurgerStack
      <ul>{renderList}</ul>
    </div>
  );
};

export default BurgerStack;