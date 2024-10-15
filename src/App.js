import React, { useState } from 'react'
import BudgetOverView from './components/BudgetOverView';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.scss';
const App = () => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (newIncome) => setIncome([...income, newIncome]);
  const addExpense = (newExpense) => setExpenses([...expenses, newExpense]);

  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div className='app'>
      <h1>Personal Budget App</h1>
      <BudgetOverView totalIncome={totalIncome} totalExpenses={totalExpenses} />
      <IncomeForm addIncome={addIncome} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default App