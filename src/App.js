// import logo from './logo.svg';
// import logo from './AV-logo.png';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home'
import Jewelery from './components/Jewelery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <>
     <div className="App">
      <header>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-page" element={<Jewelery />} />
        </Route>
        </Routes>
        </Router> 
      </header>
      <footer className="py-3 text-center IndianRed text-white">
        <p>Footer content</p>
      </footer>
    </div>
     </>
  );
}

export default App;
