import React from 'react'
import './ExpenseDate.scss'

const ExpenseDate = ({date}) => {

    const month = date.toLocaleString('es-ES', { month: 'long' });
    const day = date.toLocaleString('es-ES', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__month'>{day}</div>
        </div>
    )
}

export default ExpenseDate