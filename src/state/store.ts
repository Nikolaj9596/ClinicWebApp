import { combineReducers, createStore } from "redux";
import { appointmentReducer } from "./appointment-reducer";
import { AppointmentType } from "./appointment.type";
import { clientReducer } from "./client-reducer";
import { ClientType } from "./client.type";
import { diagnosReducer } from "./diagnos-reducer";
import { DiagnosType } from "./diagnos.type";
import { diseaseReducer } from "./disease-reducer";
import { DiseaseType } from "./disease.type";
import { doctorReducer } from "./doctor-reducer";
import { DoctorType } from "./doctor.type";

let reducers = combineReducers({
  clients: clientReducer,
  doctors: doctorReducer,
  diseases: diseaseReducer,
  diagnosis: diagnosReducer,
  appointments: appointmentReducer
})

export type AppRootState = {
  clients: Array<ClientType>
  doctors: Array<DoctorType>
  diseases: Array<DiseaseType>
  diagnosis: Array<DiagnosType>
  appointments: Array<AppointmentType>
}

export const sotore = createStore(reducers);


export default sotore
