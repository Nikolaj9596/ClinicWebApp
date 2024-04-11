import { DoctorActions, DoctorReducerActionType, DoctorType, RemoveDoctorByIdActionType } from "./doctor.type";

const initState: Array<DoctorType> = [
  {
    "id": 1,
    "firstName": "Владимир",
    "lastName": "Петров",
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
    "lastName": "Петров",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  },
  {
    "id": 4,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "profession": { "id": 1, "name": "Стоматолог" },
    "dateStartWork": "2020-10-11",
    "dateBirthday": "1990-10-11",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
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
