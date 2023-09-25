import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import updateChartData from '../../utils/updateDataFunction';
import './TotalTradesChart.scss';

const TotalTradesChart = ({ openTrades, closedTrades }) => {
  const chartRef = useRef(null);

  const series = [
    {
      name: 'Closed',
      y: closedTrades,
      dataLabels: {
        connectorColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0,
          },
          stops: [
            [0, 'rgba(237, 237, 237, 0)'],
            [1, 'rgba(237, 237, 237, 1)'],
          ],
        },
      },
    },
    {
      name: 'Open',
      y: openTrades,
      dataLabels: {
        connectorColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
          },
          stops: [
            [0, 'rgba(237, 237, 237, 0)'],
            [1, 'rgba(237, 237, 237, 1)'],
          ],
        },
      },
    },
  ];

  useEffect(() => {
    updateChartData(chartRef, series);
  }, [closedTrades, openTrades]);

  const options = {
    chart: {
      type: 'pie',
      plotShadow: false,
      backgroundColor: 'transparent',
      className: 'total-trades__chart',
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        innerSize: '55%',
        colors: ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.6)'],
        size: 179,
        borderWidth: 0,
        borderRadius: 0,
        startAngle: -180,
        endAngle: 180,
        dataLabels: {
          formatter: function () {
            return `<span style="font-family: Playfair Display, serif; font-size: 24px;">${this.y}</span><br /><span style="font-family: Inter, sans-serif; font-weight: 200; text-transform: uppercase; font-size: 11px;">${this.point.name}</span>`;
          },
          connectorWidth: 2,
          distance: 20,
          y: -5,
          style: {
            color: '#fff',
            textOutline: 'none',
          },
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        name: 'trades',
        data: series,
      },
    ],
  };

  return (
    <div className="total-trades">
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
      <div className="total-trades__title">
        <span className="total-trades__title_text">Total trades</span>
        <span className="total-trades__title_number">{closedTrades + openTrades}</span>
      </div>
    </div>
  );
};

export default TotalTradesChart;
