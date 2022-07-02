import React from 'react'
import './Expenses.scss'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const Expenses = ({expenses}) => {
    return (
        <div className="expenseContaine">
            <Card className='expenses'>
                { expenses.map((expense)=>
                    <ExpenseItem key={expense.title} expense={expense}/>
                )}
            </Card>
        </div>
    )
}

export default Expenses