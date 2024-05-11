import React from 'react';
import Expenses from "./components/Expenses.js";
import NewExpense from "./components/NewExpence/NewExpense.js";
function App() {
  return (
    <div>
      <h2>Let's get Started</h2>
      <NewExpense/>
      <Expenses />
    </div>
  );
}

export default App;