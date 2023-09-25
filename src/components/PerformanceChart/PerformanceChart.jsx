import React from 'react';
import PerformanceCircle from './PerformanceCircle/PerformanceCircle';
import './PerformanceChart.scss';

const PerformanceChart = ({ spPerformance, tradedeskPerformance, difference }) => {
  return (
    <div className="performance-circles">
      <PerformanceCircle name="S&P performance" performance={spPerformance} />
      <PerformanceCircle name="Tradedesk performance" performance={tradedeskPerformance} />
      <span className="performance-circles__difference">{difference} %</span>
    </div>
  );
};

export default PerformanceChart;
