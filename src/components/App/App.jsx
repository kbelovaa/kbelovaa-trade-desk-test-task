import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './App.scss';

const App = () => {
  return (
    <div className="content">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
