import React from "react";
import { useState } from "react";


function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleClick = (event) => {
    event.preventDefault();

    const newExpense = {
      name,
      description,
      category,
      amount,
      date,
    };

    addExpense(newExpense);

    // Clear form
    setName("");
    setDescription("");
    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="container">
      <form className="taskForm">
        <h2>Add Expense</h2>
        <p>Enter your expense details below</p>
        <input
          type="text"
          placeholder="Enter Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Expense Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Expense Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn" type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default ExpenseForm