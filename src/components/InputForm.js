import React, { useState } from 'react';
import { simulateROI, saveScenario } from '../api/api';

function InputForm({ setResult }) {
  const [form, setForm] = useState({
    scenario_name: '',
    monthly_invoice_volume: 2000,
    num_ap_staff: 3,
    avg_hours_per_invoice: 0.17,
    hourly_wage: 30,
    error_rate_manual: 0.5,
    error_cost: 100,
    time_horizon_months: 36,
    one_time_implementation_cost: 50000
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await simulateROI(form);
    setResult(res.data);
  };

  const handleSave = async () => {
    await saveScenario(form);
    alert('Scenario saved!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        name="scenario_name"
        placeholder="Scenario Name"
        value={form.scenario_name}
        onChange={handleChange}
        required
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button type="submit" style={{ marginRight: '5px' }}>Simulate</button>
      <button type="button" onClick={handleSave}>Save Scenario</button>
    </form>
  );
}

export default InputForm;
