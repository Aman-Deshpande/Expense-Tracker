import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  
  return (
    <li style={{listStyle:"none"}}>
    <Card className="expense-item">
      <ExpenseDate d={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;