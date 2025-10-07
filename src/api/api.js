import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const simulateROI = (data) => axios.post(`${API_BASE}/simulate`, data);
export const saveScenario = (data) => axios.post(`${API_BASE}/scenarios`, data);
export const getScenarios = () => axios.get(`${API_BASE}/scenarios`);
export const generateReport = (data) => axios.post(`${API_BASE}/report/generate`, data, { responseType: 'blob' });
