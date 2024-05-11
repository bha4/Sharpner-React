import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    EnteredTitle: "",
    EnteredAmount: "",
    EnteredDate: ""
  });
  

  const titleChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, EnteredTitle: event.target.value };
    });
  };
  
  const amountChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, EnteredAmount: event.target.value };
    });
  };
  
  const dateChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, EnteredDate: event.target.value };
    });
  };
  
  return (
    <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
          </div>
      </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
            </div>
    </form>
  )
}

export default ExpenseForm;

