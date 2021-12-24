import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredDate, setEnteredDate] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }
  function amountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }
  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          // height: "100vh",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "flex-start",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 340,
              height: 260,
            },
          }}
        >
          <Paper variant="outlined">
            <form onSubmit={submitHandler}>
              <div>
                <div style={{ marginTop: "20px" }}>
                  <TextField
                    required
                    sx={{ width: "80%" }}
                    id="enteredTitle"
                    label="Title"
                    variant="outlined"
                    size="small"
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <TextField
                    required
                    sx={{ width: "80%" }}
                    id="enteredAmount"
                    label="Amount"
                    variant="outlined"
                    size="small"
                    type="number"
                    min="1"
                    step="1"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <TextField
                    required
                    sx={{ width: "80%" }}
                    id="enteredDate"
                    variant="outlined"
                    size="small"
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={enteredDate}
                    //   onChange={(e) => setEnteredDate(e.target.value)}
                    onChange={dateChangeHandler}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Button variant="contained" type="submit">
                    Add Expense
                  </Button>
                </div>
              </div>
            </form>
          </Paper>
        </Box>
      </div>
    </>
  );
}

export default ExpenseForm;
