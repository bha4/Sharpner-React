import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "./Card";


function ExpenseItem(props) {
  function buttonClickHandler(event){
    console.log("Button clicked")
  }
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
}


export default ExpenseItem;
