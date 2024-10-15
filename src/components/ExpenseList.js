import React from 'react'
import './ExpenseList.scss';
const ExpenseList = ({ expenses }) => {
  return (
    <div className='expense-list'>
        <h2>Expenses</h2>
        <ul>
            {expenses.map((expense, index) => (
                <li key={index}>
                    {expense.expense}: ${expense.amount}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ExpenseList;