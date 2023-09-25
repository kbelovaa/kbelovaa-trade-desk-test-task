const updateChartData = (chartRef, series) => {
  if (chartRef.current) {
    const { chart } = chartRef.current;

    chart.series[0].setData(series);
  }
};

export default updateChartData;
