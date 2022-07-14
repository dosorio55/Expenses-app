import React from 'react'
import './Chart.scss'
import ChartBar from './ChartBar'

const Chart = ({ dataPoints }) => {

  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues)

  return (
    <div className='chart'>
      {dataPoints.map(dataPoint =>
        <ChartBar
          key={dataPoint.label}
          dataPoint={dataPoint}
          maxValue={totalMax} />)}
    </div>
  )
}

export default Chart