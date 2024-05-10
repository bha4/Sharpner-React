import React from 'react'
import ExpenseItem from './components/ExcepenseItem';
function App() {
  const expenses = [
    { id: "1", date: new Date(2023, 7, 15), title: "Insurance",location:"Bangalore", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), title: "Book",location:"Delhi", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), title: "Pen",location:"Hyderabad", price: 1 },
    { id: "4", date: new Date(2023, 1, 14), title: "Laptop",location:"Mumbai", price: 200 },
  ];

  return (
    <div>
      <h1>Let's get Started</h1>
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            location={expense.location}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
