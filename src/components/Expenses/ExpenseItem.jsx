import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.scss'

const ExpenseItem = ({ expense }) => {

  const [title, setTitle] = useState(expense.title)

  const clickHandler = () => {
    setTitle('he cambiado el título')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{expense.ammount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  )
}

export default ExpenseItem