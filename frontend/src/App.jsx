import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import MainLayout from './components/Layout/MainLayout';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import QueryPage from './pages/Query';
import AnaloguesPage from './pages/Analogues';
import GraphPage from './pages/Graph';
import ScenariosPage from './pages/Scenarios';
import AdminPage from './pages/Admin';

import './styles/App.css';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/query" element={<QueryPage />} />
          <Route path="/analogues" element={<AnaloguesPage />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/scenarios" element={<ScenariosPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
