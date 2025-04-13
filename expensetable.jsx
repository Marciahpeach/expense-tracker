 import React from "react";

function ExpenseTable(){
    
    return(
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
            </tr>
          ))}
        </tbody>
      </table>
       

    )
}
export default ExpenseTable

