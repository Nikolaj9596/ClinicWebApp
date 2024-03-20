import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListClients from './comonents/ListClients/ListClients';
import ListDoctors from './comonents/ListDoctors/ListDoctors';
import NavBar from './comonents/NavBar/NavBar';

function App() {
  return (<div className="app">
    <nav className="navBar">
      <NavBar />
    </nav>
    <div className="content">
      <Routes>
        <Route path="/doctors" element={<ListDoctors />} />
        <Route path="/clients" element={<ListClients />} />
      </Routes>
    </div>
  </div>)
}

export default App;
