import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ResultsCard from './components/ResultsCard';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app-container">
      <h1>Invoicing ROI Simulator</h1>
      <InputForm setResult={setResult} />
      <ResultsCard result={result} />
    </div>
  );
}

export default App;
