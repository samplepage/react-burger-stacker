import React from "react";
import Ingredients from "./Ingredients";

const IngredientsList = ({ingredientsList,addToBurgerStack}) => {
  const renderList = ingredientsList.map((ingredient, index) => {
        return <li key={index}>
        <Ingredients key={index} name={ingredient.name} addToBurgerStack={addToBurgerStack} />
        <button onClick={()=>addToBurgerStack(ingredient)}>Add To Stack</button>
        </li> 
    })
  console.log(renderList)
    return ( 
    <div>Ingredients List
        <ul>
            {renderList}
        </ul>
    </div>
    );
};

export default IngredientsList;