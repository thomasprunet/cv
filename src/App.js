import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { ThemeProvider } from './ThemeContext';
import './App.css';

const App = () => {
  
  return (
    <ThemeProvider>
      <Router basename="/cv">
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

const AppContent = () => {
  
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
