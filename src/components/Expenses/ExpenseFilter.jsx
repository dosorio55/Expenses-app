import React from 'react'
import './ExpenseFilter.scss'

const ExpenseFilter = ({handleYear}) => {

    const changeYear = (event) => {
        handleYear(event.target.value)
    }

  return (
    <div className='expenses-filter'>
        <div className="expenses-filter__control">
            <label>Filter by Year</label>
            <select  onChange={changeYear}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>
  )
}

export default ExpenseFilter