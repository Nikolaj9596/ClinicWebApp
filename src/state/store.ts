import { combineReducers, createStore } from "redux";
import { clientReducer } from "./client-reducer";
import { ClientType } from "./client.type";
import { doctorReducer } from "./doctor-reducer";
import { DoctorType } from "./doctor.type";

let reducers = combineReducers({
  clients: clientReducer,
  doctors: doctorReducer
})

export type AppRootState = {
  clients: Array<ClientType>,
  doctors: Array<DoctorType>
}

export const sotore = createStore(reducers);


export default sotore
