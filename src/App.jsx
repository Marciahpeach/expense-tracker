import React, { useState } from 'react'
import './App.css';
import Header from './assets/header';
import ExpenseForm from './assets/expenseform';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const query = searchQuery.toLowerCase();
    return (
      expense.name.toLowerCase().includes(query) ||
      expense.description.toLowerCase().includes(query) ||
      expense.category.toLowerCase().includes(query) ||
      expense.amount.toString().includes(query) ||
      expense.date.toLowerCase().includes(query)
    );
  });

  return (
    <div>

      <div className="expense-search">
        <Header/>
        <input
          type="text"
          className='searchbar'
          placeholder="Search by name, category, amount..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      <ExpenseForm addExpense={addExpense} />
      </div>

      <div className="expense-table">
        <h2>Expenses</h2>
        {filteredExpenses.length === 0 ? (
          <p>No matching expenses found.</p>
        ) : (
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((exp, index) => (
                <tr key={index}>
                  <td>{exp.name}</td>
                  <td>{exp.description}</td>
                  <td>{exp.category}</td>
                  <td>{exp.amount}</td>
                  <td>{exp.date}</td>
                  <button className='btn'>Delete</button>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;



