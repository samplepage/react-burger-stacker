import React, { useState } from "react";
// Components imports
import IngredientsList from "./components/IngredientsList";
//import FunctionalComponent from "./components/FunctionalComponent";
import BurgerPane from "./components/BurgerPane";
// CSS imports
import "./css/App.css";

const App = () => {
  const data = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ];

  const [ingredientsList, setIngredientsList] = useState(data);
  const [burgerStackList, setBurgerStackList] = useState([]);

  const addToBurgerStack = (ingredient) => {
    //console.log(ingredient)
    setBurgerStackList([ingredient, ...burgerStackList]);
  };

  const deleteThatList = () => {
    setBurgerStackList([]);
  };
  return (
    <div className="App">
      <IngredientsList
        addToBurgerStack={addToBurgerStack}
        ingredientsList={ingredientsList}
      />
      <BurgerPane
        burgerStackList={burgerStackList}
        deleteThatList={deleteThatList}
      />
    </div>
  );
};

export default App;
