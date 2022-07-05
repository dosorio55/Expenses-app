import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.scss'

const NewExpense = ({addExpenseHandler}) => {
    return (
        <div className='new-expense'>
            <ExpenseForm addExpenseHandler={addExpenseHandler}/>
        </div>
    )
}

export default NewExpense