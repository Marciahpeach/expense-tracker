import React from "react";

function ExpenseTable() {

  return (
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.name}</td>
              <td>{exp.description}</td>
              <td>{exp.category}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteExpense(exp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>


  )
}
export default ExpenseTable

