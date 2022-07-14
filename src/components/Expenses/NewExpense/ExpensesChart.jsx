import React from 'react'
import Chart from '../Chart/Chart';

const ExpensesChart = ({ expenses }) => {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const chartInitalState = { label: '', value: 0 }

    const chartDatapoins = monthNames.map(month => {
        return { ...chartInitalState, label: month }
    });

        for (const expense of expenses) {
            const expenseMonth = expense.date.getMonth();
            chartDatapoins[expenseMonth].value += expense.amount
        }


    return (
        <Chart dataPoints={chartDatapoins} />
    )
}

export default ExpensesChart