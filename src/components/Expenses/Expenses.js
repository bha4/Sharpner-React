import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent;

  if (filteredExpenses.length === 1) {
    expensesContent = (
      <>
        <p>Only one expense found. Please add more</p>
        <ExpenseItem
          key={filteredExpenses[0].id}
          title={filteredExpenses[0].title}
          date={filteredExpenses[0].date}
          price={filteredExpenses[0].price}
        />
      </>
    );
  } else if (filteredExpenses.length > 1) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    ));
  } else {
    expensesContent = <p>No expenses found</p>;
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {expensesContent}
    </Card>
  );
};
export default Expenses;
