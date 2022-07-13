import React, { useState } from 'react'
import './Expenses.scss'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

const Expenses = ({ expenses }) => {

    const [selectedYear, setSelectedYear] = useState("2022");

    const expensebyYear = expenses.filter(expense => {

        return expense.date.getFullYear().toString() === selectedYear;
    })

    const expensesContent = expensebyYear.length === 0 ? <p>No expenses found. Add a new expense</p>
        : expensebyYear.map((expense, index) => <ExpenseItem key={index} expense={expense} />)

    const handleYear = (year) => {
        setSelectedYear(year)
    }

    return (
        <div className='expensesContainer'>

            <Card className='expenses'>
                <ExpenseFilter selectedYear={selectedYear} handleYear={handleYear} />
                {expensesContent}
            </Card>
        </div>
    )
}

export default Expenses