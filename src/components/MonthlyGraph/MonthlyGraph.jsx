import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import updateChartData from '../../utils/updateDataFunction';
import './MonthlyGraph.scss';

const MonthlyGraph = ({ funds, profit }) => {
  const chartRef = useRef(null);

  const series = [funds, profit];

  useEffect(() => {
    updateChartData(chartRef, series);
  }, [funds, profit]);

  const options = {
    chart: {
      type: 'column',
      plotShadow: false,
      backgroundColor: 'transparent',
      className: 'monthly-graph__chart',
      width: 340,
      height: 250,
    },
    plotOptions: {
      column: {
        color: 'rgba(255, 255, 255, 0.80)',
        borderRadius: '6px 6px 0px 0px',
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:,.0f}',
          style: {
            fontSize: '16px',
            color: '#1E343E',
            fontFamily: 'Playfair Display, serif',
            lineHeight: '100%',
            letterSpacing: '-0.64px',
            textOutline: 'none',
          },
          verticalAlign: 'top',
          x: -35,
          y: 0,
        },
      },
    },
    title: {
      text: null,
    },
    xAxis: {
      lineColor: 'white',
    },
    yAxis: {
      title: {
        text: null,
      },
      tickInterval: 10000,
      labels: {
        style: {
          fontFamily: 'Playfair Display, serif',
          color: '#fff',
          fontSize: '12px',
          lineHeight: '100%',
        },
        formatter: function () {
          return Highcharts.numberFormat(this.value, 0, '.', ', ');
        },
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        name: 'USD',
        data: series,
        pointWidth: 122,
      },
    ],
  };

  return (
    <div className="monthly-graph">
      <p className="monthly-graph__title">{new Date().toLocaleString('en-US', { month: 'long' })}</p>
      <p className="monthly-graph__subtitle">monthly graph</p>
      <div className="monthly-graph__wrapper">
        <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
      </div>
      <span className="monthly-graph__label monthly-graph__label_left">Total funds allocated</span>
      <span className="monthly-graph__label monthly-graph__label_right">Total profit from closed trades</span>
    </div>
  );
};

export default MonthlyGraph;
