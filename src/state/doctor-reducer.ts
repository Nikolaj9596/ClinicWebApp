import { DoctorActions, DoctorReducerActionType, DoctorType, RemoveDoctorByIdActionType } from "./doctor.type";

const initState: Array<DoctorType> = [
  {
    "id": 1,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11"
  },
  {
    "id": 2,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11"
  },
  {
    "id": 3,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11"
  },
  {
    "id": 4,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11"
  }

]

export const doctorReducer = (state: Array<DoctorType> = initState, action: DoctorReducerActionType) => {
  switch (action.type) {
    default:
      return state;
  }
}


export const removeDoctorByIdAC = (doctorId: number): RemoveDoctorByIdActionType => {
  return { type: DoctorActions.removeDoctorByIdAction, doctorId: doctorId }
}
