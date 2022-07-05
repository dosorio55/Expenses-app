import React, { useState } from 'react'
import './ExpenseForm.scss'

const ExpenseForm = ({addExpenseHandler}) => {


    const [expenseForm, setExpenseForm] = useState({ title: '', amount: '', date: '' })

    const formHandler = (event) => {
        const { value, name } = event.target;
        const formValue = name === 'date' ? new Date(value) : value ;
        setExpenseForm((prevState) => { return { ...prevState, [name]: formValue } })
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        addExpenseHandler(expenseForm)
        // console.log(expenseForm)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" name='title' onChange={formHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" name='amount' min='0.01' step='0.01'  onChange={formHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" name='date' min='2019-01-01'  onChange={formHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm