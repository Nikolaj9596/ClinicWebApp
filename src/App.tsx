import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListAppointmentis from './comonents/ListAppointment/ListAppointment';
import ClientDetails from './comonents/ListClients/ClientDetails/ClientDetails';
import ListClients from './comonents/ListClients/ListClients';
import DiagnosDetails from './comonents/ListDiagnosis/DiagnosDetail/DiagnosDetail';
import ListDiagnosis from './comonents/ListDiagnosis/ListDiagnosis';
import DiseaseDetails from './comonents/ListDisease/DeseaseDetail/DeseaseDetail';
import ListDiseases from './comonents/ListDisease/ListDisease';
import { DoctorDetails } from './comonents/ListDoctors/DoctorDetails/DoctorDetails';
import ListDoctors from './comonents/ListDoctors/ListDoctors';
import NavBar from './comonents/NavBar/NavBar';
import ClientProfilePage from './comonents/NavBar/TableTest';
import { AppointmentType } from './state/appointment.type';
import { ClientType } from './state/client.type';
import { DiagnosType } from './state/diagnos.type';
import { DiseaseType } from './state/disease.type';
import { DoctorType } from './state/doctor.type';
import { AppRootState } from './state/store';

function App() {
  const dispatch = useDispatch()
  const clients = useSelector<AppRootState, Array<ClientType>>(state => state.clients)
  const doctors = useSelector<AppRootState, Array<DoctorType>>(state => state.doctors)
  const diseases = useSelector<AppRootState, Array<DiseaseType>>(state => state.diseases)
  const diagnosis = useSelector<AppRootState, Array<DiagnosType>>(state => state.diagnosis)
  const appointments = useSelector<AppRootState, Array<AppointmentType>>(state => state.appointments)



  const getClientById = (clientId: number): ClientType | null => {
    return clients.find((tl) => tl.id === clientId) || null;
  };

  const getDoctorById = (doctorId: number): DoctorType | null => {
    return doctors.find((tl) => tl.id === doctorId) || null;
  };

  const getDiseaseById = (diseaseId: number): DiseaseType | null => {
    return diseases.find((tl) => tl.id === diseaseId) || null;
  };

  const getDiagnosById = (diagnosId: number): DiagnosType | null => {
    return diagnosis.find((tl) => tl.id === diagnosId) || null;
  };

  return (
    <div className="app">
      <nav className="navBar">
        <NavBar />
      </nav>
      <div className="content">
        <Routes>
          <Route path="/test" element={<ClientProfilePage client={{ id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', dateBirthday: '01.01.1980', address: 'г. Москва, ул. Пушкина, д.1', avatar: 'url_to_avatar_image', }} />} />
          <Route path="/doctors" element={<ListDoctors doctors={doctors} />} />
          <Route path="/clients" element={<ListClients clients={clients} />} />
          <Route path="/diseases" element={<ListDiseases diseases={diseases} />} />
          <Route path="/diagnosis" element={<ListDiagnosis diagnosis={diagnosis} />} />
          <Route path="/appointments" element={<ListAppointmentis appointments={appointments} />} />
          <Route path="/clients/:id" element={<ClientDetails getClientById={getClientById} />} />
          <Route path="/doctors/:id" element={<DoctorDetails getDoctorById={getDoctorById} />} />
          <Route path="/diseases/:id" element={<DiseaseDetails getDiseaseById={getDiseaseById} />} />
          <Route path="/diagnosis/:id" element={<DiagnosDetails getDiagnosById={getDiagnosById} />} />
        </Routes>
      </div>
    </div>)
}

export default App;
