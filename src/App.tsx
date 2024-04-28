import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import { addClienAC, editClienAC, removeClienByIdAC, searchClientAC } from './state/client-reducer';
import { ClientType } from './state/client.type';
import { addDiagnosAC, removeDiagnosByIdAC, searchDiagnosAC } from './state/diagnos-reducer';
import { DiagnosType } from './state/diagnos.type';
import { DiseaseType } from './state/disease.type';
import { addDoctorAC, editDoctorAC, removeDoctorByIdAC, searchDoctorAC } from './state/doctor-reducer';
import { DoctorType, ProfessionType } from './state/doctor.type';
import { AppRootState } from './state/store';

const App = () => {
  const dispatch = useDispatch()
  const clients = useSelector<AppRootState, Array<ClientType>>(state => state.clients)
  const doctors = useSelector<AppRootState, Array<DoctorType>>(state => state.doctors)
  const diseases = useSelector<AppRootState, Array<DiseaseType>>(state => state.diseases)
  const diagnosis = useSelector<AppRootState, Array<DiagnosType>>(state => state.diagnosis)
  const appointments = useSelector<AppRootState, Array<AppointmentType>>(state => state.appointments)
  const professions: Array<ProfessionType> = [
    { id: 1, name: 'Терапевт' },
    { id: 2, name: 'Хирург' },
    { id: 3, name: 'Стомотолог' },
  ];
  const navigate = useNavigate(); // Хук для навигации


  // Doctor
  const getDoctorById = (doctorId: number): DoctorType | null => {
    return doctors.find((tl) => tl.id === doctorId) || null;
  };

  const handleAddDoctor = (doctor: DoctorType): void => {
    dispatch(addDoctorAC(doctor))
    navigate(`/doctors`); // Предполагается, что '/doctors/new' ведёт на страницу добавления нового доктора.
  };

  const handleDeleteDoctor = (doctorId: number): void => {
    dispatch(removeDoctorByIdAC(doctorId))
    navigate(`/doctors`);
  };

  const handleEditDoctor = (doctor: DoctorType): void => {
    dispatch(editDoctorAC(doctor))
    navigate(`/doctors/${doctor.id}`);
  };

  const handleSearchDoctor = (searchTerm: string): void => {
    dispatch(searchDoctorAC(searchTerm))
  };

  const getDiseaseById = (diseaseId: number): DiseaseType | null => {
    return diseases.find((tl) => tl.id === diseaseId) || null;
  };

  //  DIAGNOS
  const getDiagnosById = (diagnosId: number): DiagnosType | null => {
    return diagnosis.find((tl) => tl.id === diagnosId) || null;
  };

  const handleAddDiagnos = (diagnos: DiagnosType): void => {
    dispatch(addDiagnosAC(diagnos))
    navigate(`/diagnosis`); // Предполагается, что '/doctors/new' ведёт на страницу добавления нового доктора.
  };

  const handleDeleteDiagnos = (diagnosId: number): void => {
    dispatch(removeDiagnosByIdAC(diagnosId))
    navigate(`/diagnosis`);
  };

  const handleEditDiagnos = (diagnos: DiagnosType): void => {
    dispatch(editDiagnosnAC(diagnos))
    navigate(`/diagnosis/${diagnos.id}`);
  };

  const handleSearchDiagnos = (searchTerm: string): void => {
    dispatch(searchDiagnosAC(searchTerm))
  };

  //  CLIENT
  const getClientById = (clientId: number): ClientType | null => {
    return clients.find((tl) => tl.id === clientId) || null;
  };

  const handleAddClient = (client: ClientType): void => {
    dispatch(addClienAC(client))
    navigate(`/clients`); // Предполагается, что '/doctors/new' ведёт на страницу добавления нового доктора.
  };

  const handleDeleteClient = (clientId: number): void => {
    dispatch(removeClienByIdAC(clientId))
    navigate(`/clients`);
  };

  const handleEditClient = (client: ClientType): void => {
    dispatch(editClienAC(client))
    navigate(`/clients/${client.id}`);
  };

  const handleSearchClient = (searchTerm: string): void => {
    dispatch(searchClientAC(searchTerm))
  };

  return (
    <div className="app">
      <nav className="navBar">
        <NavBar />
      </nav>
      <div className="content">
        <Routes>
          {/* <Route path="/test" element={<ClientProfilePage client={{ id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', dateBirthday: '01.01.1980', address: 'г. Москва, ул. Пушкина, д.1', avatar: 'url_to_avatar_image', }} />} /> */}
          <Route path="/doctors" element={<ListDoctors doctors={doctors} handleAddDoctor={handleAddDoctor} handleDeleteDoctor={handleDeleteDoctor} handleEditDoctor={handleEditDoctor} handleSearchDoctor={handleSearchDoctor} professions={professions} />} />
          <Route path="/clients" element={<ListClients clients={clients} handleAddClient={handleAddClient} handleDeleteClient={handleDeleteClient} handleEditClient={handleEditClient} handleSearchClient={handleSearchClient} />} />
          <Route path="/diseases" element={<ListDiseases diseases={diseases} />} />
          <Route path="/diagnosis" element={<ListDiagnosis diagnosis={diagnosis} handleAddDiagnos={handleAddDiagnos} handleDeleteDiagnos={handleDeleteDiagnos} handleEditDiagnos={handleEditDiagnos} handleSearchDiagnos={handleSearchDiagnos} doctors={doctors} clients={clients} diseases={diseases} />} />
          <Route path="/appointments" element={<ListAppointmentis appointments={appointments} />} />
          <Route path="/clients/:id" element={<ClientDetails getClientById={getClientById} handleDeleteClient={handleDeleteClient} handleEditClient={handleEditClient} />} />
          <Route path="/doctors/:id" element={<DoctorDetails getDoctorById={getDoctorById} handleDeleteDoctor={handleDeleteDoctor} handleEditDoctor={handleEditDoctor} professions={professions} />} />
          <Route path="/diseases/:id" element={<DiseaseDetails getDiseaseById={getDiseaseById} />} />
          <Route path="/diagnosis/:id" element={<DiagnosDetails getDiagnosById={getDiagnosById} handleDeleteDiagnos={handleDeleteDiagnos} handleEditDiagnos={handleEditDiagnos}  doctors={doctors} clients={clients} diseases={diseases}/>} />
        </Routes>
      </div>
    </div>)
}

export default App;
function editDiagnosnAC(diagnos: DiagnosType): any {
  throw new Error('Function not implemented.');
}

