import { Actions, AppointmentReducerActionType, AppointmentType, RemoveAppointmentByIdActionType } from "./appointment.type";


const initState: Array<AppointmentType> = [
  {
    "id": 1,
    "doctor": {
      "id": 1,
      "firstName": "Вадим",
      "lastName": "Петров",
      "middleName": "Васильев",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png",
      "profession": { "id": 1, "name": "Стоматолог" }
    },
    "client": {

      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "start_date_appointment": "2024-10-20T10:20:30",
    "end_date_appointment": null
  },
  {
    "id": 1,
    "doctor": {
      "id": 1,
      "firstName": "Вадим",
      "lastName": "Петров",
      "middleName": "Васильев",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png",
      "profession": { "id": 1, "name": "Стоматолог" }
    },
    "client": {

      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "start_date_appointment": "2024-10-20T10:20:30",
    "end_date_appointment": null
  },
  {
    "id": 1,
    "doctor": {
      "id": 1,
      "firstName": "Вадим",
      "lastName": "Петров",
      "middleName": "Васильев",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png",
      "profession": { "id": 1, "name": "Стоматолог" }
    },
    "client": {

      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "start_date_appointment": "2024-10-20T10:20:30",
    "end_date_appointment": null
  }
]


export const appointmentReducer = (state: Array<AppointmentType> = initState, action: AppointmentReducerActionType): Array<AppointmentType> => {
  switch (action.type) {
    default:
      return state;
  }
}

export const removeAppointmentByIdAC = (appointmentId: number): RemoveAppointmentByIdActionType => {
  return { type: Actions.removeAppointmentByIdAction, appointmentId: appointmentId }
}


