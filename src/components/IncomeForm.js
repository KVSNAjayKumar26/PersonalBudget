import React, { useState } from 'react'
import './IncomeForm.scss';
const IncomeForm = ({ addIncome }) => {
    const [incomeSource, setIncomeSource] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (incomeSource && amount) {
            addIncome({ source: incomeSource, amount: parseFloat(amount) });
            setIncomeSource('');
            setAmount('');
        }
    };
  return (
    <form onSubmit={handleSubmit} className='income-form'>
        <input
        type='text'
        placeholder='Income Source'
        value={incomeSource}
        onChange={(e) => setIncomeSource(e.target.value)}
        />
        <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        <button type='submit'>Add Income</button>
    </form>
  )
}

export default IncomeForm