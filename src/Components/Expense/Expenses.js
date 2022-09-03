import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart"

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </li>
  );
}
