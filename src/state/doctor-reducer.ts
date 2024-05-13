import { doctorAPI } from "../api/doctor.api";
import { AddDoctorActionType, DoctorActions, DoctorReducerActionType, DoctorType, EditDoctorActionType, GetListDoctorsActionType, RemoveDoctorByIdActionType, SearchDoctorActionType } from "./doctor.type";

const initState: Array<DoctorType> | [] = []

export const doctorReducer = (state: Array<DoctorType> = initState, action: DoctorReducerActionType) => {
  switch (action.type) {

    case (DoctorActions.removeDoctorByIdAction):
      const deleteDoctor = async () => {
        try {
          await doctorAPI.deleteDoctor(action.doctorId);
        } catch (error) {
          console.error("Error create doctor", error);
        }
      };
      deleteDoctor();
      return state.filter(c => c.id !== action.doctorId)

    case (DoctorActions.addDoctorAction):
      const createDoctor = async () => {
        try {
          await doctorAPI.createDoctor(action.doctor);
        } catch (error) {
          console.error("Error create doctor", error);
        }
      };
      createDoctor();
      return [...state, action.doctor]

    case DoctorActions.editDoctorAction:
      const isDoctorExist = state.find(doctor => doctor.id === action.doctor.id);
      if (!isDoctorExist) {
        return state;
      }
      const editDoctor = async () => {
        try {
          await doctorAPI.updateDoctor(action.doctor);
        } catch (error) {
          console.error("Error create doctor", error);
        }
      };
      editDoctor();
      return state.map(doctor =>
        doctor.id === action.doctor.id
          ? action.doctor
          : doctor
      )

    case (DoctorActions.searchDoctorAction):
      if (action.searchTerm === "") {
        return initState
      }
      return state.filter(c => c.lastName == action.searchTerm)
    case (DoctorActions.getListDoctorsAction):
      return action.payload
    default:
      return state;
  }
}


export const removeDoctorByIdAC = (doctorId: number): RemoveDoctorByIdActionType => {
  return { type: DoctorActions.removeDoctorByIdAction, doctorId: doctorId }
}

export const addDoctorAC = (doctor: DoctorType): AddDoctorActionType => {
  return { type: DoctorActions.addDoctorAction, doctor: doctor }
}

export const editDoctorAC = (doctor: DoctorType): EditDoctorActionType => {
  return { type: DoctorActions.editDoctorAction, doctor: doctor }
}

export const searchDoctorAC = (searchTerm: string): SearchDoctorActionType => {
  return { type: DoctorActions.searchDoctorAction, searchTerm: searchTerm }
}

export const getListDoctordAC = (payload: Array<DoctorType>): GetListDoctorsActionType => {
  return { type: DoctorActions.getListDoctorsAction, payload: payload }
}

