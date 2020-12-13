import BurgerStack from "./BurgerStack";

const BurgerPane = ({ burgerStackList, deleteThatList }) => {
    //console.log(burgerStackList)
  return (
    <div>
      Burger Pane
      <BurgerStack burgerStackList={burgerStackList} />
      <button onClick={() => deleteThatList()}>Delete That List</button>
    </div>
  );
};

export default BurgerPane;