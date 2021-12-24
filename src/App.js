import React, { useState } from "react";
import "./App.css";
import Expenses from "../src/Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummyData = [
  {
    id: 1,
    date: new Date(2021, 2, 28),
    title: "Suzuki Mehran",
    amount: "600000",
  },
  {
    id: 2,
    date: new Date(2019, 11, 18),
    title: "Suzuki Vagnor",
    amount: "1600000",
  },
  {
    id: 3,
    date: new Date(2020, 6, 24),
    title: "Honda Civic",
    amount: "5600000",
  },
  // {
  //   id: 4,
  //   date: new Date(2022, 3, 15),
  //   title: "Honda Altis",
  //   amount: "2600000",
  // },
];

function App(props) {
  const [expenses, setExpenses] = useState(dummyData);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log("In App.js");
    // console.log(expense);
  };
  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
