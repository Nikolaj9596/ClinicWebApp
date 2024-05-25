import { combineReducers, createStore, Store } from "redux";
import { appointmentReducer } from "./appointment-reducer";
import { AppointmentType } from "./appointment.type";
import { categoryDiseasesReducer } from "./category-disease-reducer";
import { clientReducer } from "./client-reducer";
import { ClientType } from "./client.type";
import { diagnosReducer } from "./diagnos-reducer";
import { DiagnosType } from "./diagnos.type";
import { diseaseReducer } from "./disease-reducer";
import { CategoryDiseasesType } from "./category-disease.type";
import { doctorReducer } from "./doctor-reducer";
import { DoctorType } from "./doctor.type";
import { professionReducer } from "./profession-reducer";
import { ProfessionType } from "./profession.type";
import { DiseaseType } from "./disease.type";

const reducers = combineReducers({
  clients: clientReducer,
  doctors: doctorReducer,
  diseases: diseaseReducer,
  diagnosis: diagnosReducer,
  appointments: appointmentReducer,
  professions: professionReducer,
  categoyDiseases: categoryDiseasesReducer
});

export type AppRootState = {
  clients: Array<ClientType>;
  doctors: Array<DoctorType>;
  diseases: Array<DiseaseType>;
  diagnosis: Array<DiagnosType>;
  appointments: Array<AppointmentType>;
  professions: Array<ProfessionType>;
  categoyDiseases: Array<CategoryDiseasesType>
};

// Создаем типизированный Store для вашего приложения
export const store: Store<AppRootState> = createStore(
  reducers,
);

