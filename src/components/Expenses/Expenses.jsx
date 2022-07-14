import React, { useState } from 'react'
import './Expenses.scss'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './NewExpense/ExpensesChart'

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

    // debugger

    return (
        <div className='expensesContainer'>

            <Card className='expenses'>
                <ExpenseFilter selectedYear={selectedYear} handleYear={handleYear} />
                <ExpensesChart expenses={expensebyYear}/>
                {expensesContent}
            </Card>

        </div>
    )
}

export default Expenses