import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import updateChartData from '../../../utils/updateDataFunction';
import './PerformanceCircle.scss';

const PerformanceCircle = ({ name, performance }) => {
  const chartRef = useRef(null);

  const series = [
    {
      name: name,
      y: performance,
    },
  ];

  useEffect(() => {
    updateChartData(chartRef, series);
  }, [performance]);

  const options = {
    chart: {
      type: 'pie',
      plotShadow: false,
      backgroundColor: 'transparent',
      className: 'performance__chart',
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        colors: ['rgba(255, 255, 255, 0.70)'],
        innerSize: '50%',
        size: 197,
        borderWidth: 0,
        borderRadius: 0,
        startAngle: 0,
        endAngle: 360,
        dataLabels: {
          enabled: false,
        },
        connectorWidth: 0,
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        name: name,
        data: series,
      },
    ],
  };

  return (
    <div className={`performance performance_${name[0]}`}>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
      <div className="performance__title">
        <span className="performance__title_text">{name}</span>
        <span className="performance__title_number">{performance}%</span>
      </div>
    </div>
  );
};

export default PerformanceCircle;
