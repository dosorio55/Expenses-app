import React from 'react'
import './ChartBar.scss'

const ChartBar = ({maxValue, dataPoint}) => {
    let barFillHeight = '0%';

  if (maxValue > 0) { barFillHeight = Math.round((dataPoint.value / maxValue) * 100) + '%' }
  
//   console.log(barFillHeight, maxValue, dataPoint.value);

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
            </div>
            <div className='chart-bar__label'>{dataPoint.label}</div>

        </div>
    )
}

export default ChartBar