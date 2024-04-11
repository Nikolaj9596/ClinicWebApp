import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ClientDetails from './comonents/ListClients/ClientDetails/ClientDetails';
import ListClients from './comonents/ListClients/ListClients';
import { DoctorDetails } from './comonents/ListDoctors/DoctorDetails/DoctorDetails';
import ListDoctors from './comonents/ListDoctors/ListDoctors';
import NavBar from './comonents/NavBar/NavBar';
import { DoctorsTable } from './comonents/NavBar/TableTest';
import { ClientType } from './state/client.type';
import { DoctorType } from './state/doctor.type';
import { AppRootState } from './state/store';

function App() {
  const dispatch = useDispatch()
  const clients = useSelector<AppRootState, Array<ClientType>>(state => state.clients)
  const doctors = useSelector<AppRootState, Array<DoctorType>>(state => state.doctors)

  const tableStyles = {
    maxWidth: "calc(100% - 150px)", // Убедитесь, что ширина таблицы учитывает ширину navbar
    marginLeft: "150px", // Отступ слева, равный ширине navbar
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    overflow: "hidden"
  }
  const getClientById = (clientId: number): ClientType | null => {
    return clients.find((tl) => tl.id === clientId) || null;
  };

  const getDoctorById = (doctorId: number): DoctorType | null => {
    return doctors.find((tl) => tl.id === doctorId) || null;
  };

  return (
    <div className="app">
      <nav className="navBar">
        <NavBar />
        {/* <Sidebar/> */}
      </nav>
      <div className="content">
        <Routes>
      
          <Route path="/test" element={<DoctorsTable doctors={doctors}/>} />
          <Route path="/doctors" element={<ListDoctors doctors={doctors} tableStyles={tableStyles}/>} />
          <Route path="/clients" element={<ListClients clients={clients} tableStyles={tableStyles}/>} />
          <Route path="clients/:id" element={<ClientDetails getClientById={getClientById} />} />
          <Route path="doctors/:id" element={<DoctorDetails getDoctorById={getDoctorById} />} />
        </Routes>
      </div>
    </div>)
}

export default App;
