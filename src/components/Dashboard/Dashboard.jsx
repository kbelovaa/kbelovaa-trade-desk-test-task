import React, { useEffect, useState } from 'react';
import getData from '../../services/requests.js';
import TotalTradesChart from '../TotalTradesChart/TotalTradesChart.jsx';
import MainChart from '../MainChart/MainChart.jsx';
import PerformanceChart from '../PerformanceChart/PerformanceChart.jsx';
import Results from '../Results/Results.jsx';
import MonthlyGraph from '../MonthlyGraph/MonthlyGraph.jsx';
import './Dashboard.scss';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response.data);
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="container">
      <div className="shadow"></div>
      <div className="slide">
        <h1 className="slide__title">Financial dashboard</h1>
        <MonthlyGraph funds={+data[7]?.[2].replace(',', '')} profit={+data[8]?.[2].replace(',', '')} />
        <MainChart closedReturn={+data[10]?.[2].slice(0, -1)} estimatedReturn={+data[11]?.[2].slice(0, -1)} />
        <PerformanceChart
          spPerformance={+data[26]?.[2].slice(0, -1)}
          tradedeskPerformance={+data[27]?.[2].slice(0, -1)}
          difference={+data[28]?.[2].slice(0, -1)}
        />
        <TotalTradesChart openTrades={+data[13]?.[2]} closedTrades={+data[14]?.[2]} />
        <Results results={data?.slice(20, 24)} />
        <div className="info">
          <div className="info__note">
            <span className="info__text">Calendar days in the market</span>
            <span className="info__number">{data[6]?.[2]}</span>
          </div>
          <div className="info__note">
            <span className="info__text">Start date</span>
            <span className="info__number">{data[5]?.[2].replace(/\./g, '/')}</span>
          </div>
        </div>
      </div>
      <div className="shadow_white"></div>
    </div>
  );
};

export default Dashboard;
