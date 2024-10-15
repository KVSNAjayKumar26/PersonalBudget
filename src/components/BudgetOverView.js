import React from 'react'
import './BudgetOverView.scss';
const BudgetOverView = ({ totalIncome, totalExpenses}) => {
    const remainingBudget = totalIncome - totalExpenses;
  return (
    <div className='budget-overview'>
        <h2>Budget Overview</h2>
        <div>Total Income: ${totalIncome}</div>
        <div>Total Expenses: ${totalExpenses}</div>
        <dov>Remaining Budget: ${remainingBudget}</dov>
    </div>
  );
};

export default BudgetOverView;