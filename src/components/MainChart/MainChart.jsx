import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import updateChartData from '../../utils/updateDataFunction';
import './MainChart.scss';

const MainChart = ({ closedReturn, estimatedReturn }) => {
  const chartRef = useRef(null);

  const series = [
    {
      name: 'Estimated return in capital in one year',
      y: estimatedReturn,
      sliced: true,
    },
    {
      name: 'Return on capital closed trades',
      y: closedReturn,
      sliced: true,
    },
  ];

  useEffect(() => {
    updateChartData(chartRef, series);
  }, [closedReturn, estimatedReturn]);

  const options = {
    chart: {
      type: 'pie',
      plotShadow: false,
      backgroundColor: 'transparent',
      className: 'main__chart',
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        colors: ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.6)'],
        size: 310,
        slicedOffset: 10,
        borderWidth: 0,
        borderRadius: 0,
        startAngle: 160,
        endAngle: 340,
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
        name: 'Return',
        data: series,
      },
    ],
  };

  return (
    <div className="main">
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
      <div className="data-label data-label_top">
        <span className="data-label__number">{closedReturn}%</span>
        <span className="data-label__text">Return on capital closed trades</span>
        <div className="data-label__connector"></div>
      </div>
      <div className="data-label data-label_bottom">
        <span className="data-label__number">{estimatedReturn}%</span>
        <span className="data-label__text">Estimated return</span>
        <br />
        <span className="data-label__text data-label__text_bottom">in capital in one year</span>
        <div className="data-label__connector"></div>
      </div>
    </div>
  );
};

export default MainChart;
