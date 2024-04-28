import { AddDoctorActionType, DoctorActions, DoctorReducerActionType, DoctorType, EditDoctorActionType, RemoveDoctorByIdActionType, SearchDoctorActionType } from "./doctor.type";

const initState: Array<DoctorType> = [
  {
    "id": 1,
    "firstName": "Владимир",
    "lastName": "Нестеров",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  },
  {
    "id": 2,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  },
  {
    "id": 3,
    "firstName": "Владимир",
    "lastName": "Луц",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  },
  {
    "id": 4,
    "firstName": "Владимир",
    "lastName": "Мишин",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  }

]

export const doctorReducer = (state: Array<DoctorType> = initState, action: DoctorReducerActionType) => {
  switch (action.type) {
    case (DoctorActions.removeDoctorByIdAction):
      return state.filter(c => c.id !== action.doctorId)
    case (DoctorActions.addDoctorAction):
      return [...state, action.doctor]
    case DoctorActions.editDoctorAction:
      const isDoctorExist = state.find(doctor => doctor.id === action.doctor.id);
      if (!isDoctorExist) {
        return state;
      }
      return state.map(doctor =>
        doctor.id === action.doctor.id
          ? action.doctor
          : doctor
      )
    case (DoctorActions.searchDoctorAction):
      if (action.searchTerm === ""){
        return initState 
      }
      return state.filter(c => c.lastName == action.searchTerm)
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

