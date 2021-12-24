import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("Expense Item is evaluated");
  const handleTitle = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div>{props.title}</div>
      <div>{props.amount}</div>
      <button onClick={handleTitle}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
