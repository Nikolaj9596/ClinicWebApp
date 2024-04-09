import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ClientDetails from './comonents/ListClients/ClientDetails/ClientDetails';
import ListClients from './comonents/ListClients/ListClients';
import ListDoctors from './comonents/ListDoctors/ListDoctors';
import NavBar from './comonents/NavBar/NavBar';
import { ClientType } from './state/client.type';
import { DoctorType } from './state/doctor.type';
import { AppRootState } from './state/store';

function App() {
  const dispatch = useDispatch()
  const clients = useSelector<AppRootState, Array<ClientType>>(state => state.clients)
  const doctors = useSelector<AppRootState, Array<DoctorType>>(state => state.doctors)
  
  const getClientById = (clientId: number): ClientType | null => {
    return clients.find((tl) => tl.id === clientId) || null;
  };

  return (
    <div className="app">
      <nav className="navBar">
        <NavBar />
      </nav>
      <div className="content">
        <Routes>
          <Route path="/doctors" element={<ListDoctors doctors={doctors} />} />
          <Route path="/clients" element={<ListClients clients={clients} />} />
          <Route path="clients/:id" element={<ClientDetails getClientById={getClientById} />} />
        </Routes>
      </div>
    </div>)
}

export default App;
