import React, { useState } from 'react'
import './Expenses.scss'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

const Expenses = ({expenses}) => {

    const [selectedYear, setSelectedYear] = useState(2022);


    const handleYear = (year) => {
        setSelectedYear(year)
    }

    return (
        <div className='expensesContainer'>

            <Card className='expenses'>
            <ExpenseFilter selectedYear={selectedYear} handleYear={handleYear} />
                { expenses.map((expense)=>
                    <ExpenseItem key={expense.title} expense={expense}/>
                )}
            </Card>
        </div>
    )
}

export default Expenses