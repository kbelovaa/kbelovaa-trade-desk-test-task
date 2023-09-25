import React, { useEffect, useState } from 'react';
import Result from './Result/Result';
import './Results.scss';

const Results = ({ results }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([results[2], results[3], results[0], results[1]]);
  }, [results]);

  return (
    <div className="results">
      {data.map((result, i) => (
        <Result key={i} text={result?.[1]} number={result?.[2]} className={i % 2 === 0 ? 'good' : 'bad'} />
      ))}
    </div>
  );
};

export default Results;
