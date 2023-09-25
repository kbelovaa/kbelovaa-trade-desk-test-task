import React from 'react';
import './Result.scss';

const Result = ({ text, number, className }) => {
  return (
    <div className={`result result_${className}`}>
      <span className="result__text">{text}</span>
      <span className="result__number">{number}</span>
    </div>
  );
};

export default Result;
