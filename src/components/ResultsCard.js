import React from 'react';

function ResultsCard({ result }) {
  if (!result) return null;

  return (
    <div className="results-card">
      <h3>Simulation Results</h3>
      <p>Monthly Savings: ${Number(result.monthly_savings).toFixed(2)}</p>
      <p>Cumulative Savings: ${Number(result.cumulative_savings).toFixed(2)}</p>
      <p>Net Savings: ${Number(result.net_savings).toFixed(2)}</p>
      <p>Payback Months: {Number(result.payback_months).toFixed(2)}</p>
      <p>ROI Percentage: {Number(result.roi_percentage).toFixed(2)}%</p>
    </div>
  );
}

export default ResultsCard;
