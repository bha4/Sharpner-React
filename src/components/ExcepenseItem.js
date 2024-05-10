import React from 'react';
import "./ExpenseItem.css";
let months =["January","Febrary","March","April","May","June","July","August","September","October","November","December"]
function ExpenseItem(props){
  const month = months[props.date.getMonth()];
  const date =props.date.getDate()
  const year =props.date.getFullYear()
  return (
    <div className="expense-item">
      <div> 
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
    </div>
    
  )
}
export default ExpenseItem;