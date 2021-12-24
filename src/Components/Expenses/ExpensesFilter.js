import React from "react";
import "./ExpenseItem.css";

function ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expense-item">
      <label>Filter by Year</label>
      <select
        value={props.selected}
        onChange={dropdownChangeHandler}
        style={{ width: "150px", height: "30px", borderRadius: "4px" }}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default ExpensesFilter;
