import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NotFound from './pages/NotFound';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Features from './pages/Features';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
);

export default App;
