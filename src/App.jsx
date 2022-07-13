import React, { useState } from 'react';
import './App.scss';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

const INITIAL_STATE = [
  {
    title: 'Car Insurance', amount: 110, date: new Date(2022, 7, 28)
  },
  {
    title: 'Insurance', amount: 260, date: new Date(2022, 7, 28)
  },
  {
    title: 'House', amount: 250, date: new Date(2021, 6, 28)
  },
  {
    title: 'Videogame', amount: 100, date: new Date(2020, 7, 10)
  }
];


const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_STATE);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      console.log(expenses)
      return [newExpense, ...prevState]
    })
  }

  return (

    <div>
        <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
