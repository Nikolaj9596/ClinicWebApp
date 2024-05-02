import { AddAppointmentActionType, AppointmentActions, AppointmentReducerActionType, AppointmentType, EditAppointmentActionType, RemoveAppointmentByIdActionType, SearchAppointmentActionType } from "./appointment.type";


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
    "startDateAppointment": "2024-10-20T10:20:30",
    "endDateAppointment": null
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
    "startDateAppointment": "2024-10-20T10:20:30",
    "endDateAppointment": null
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
    "startDateAppointment": "2024-10-20T10:20:30",
    "endDateAppointment": null
  }
]


export const appointmentReducer = (state: Array<AppointmentType> = initState, action: AppointmentReducerActionType): Array<AppointmentType> => {
  switch (action.type) {
    case (AppointmentActions.removeAppointmentByIdAction):
      return state.filter(c => c.id !== action.appointmentId)
    case (AppointmentActions.addAppointmentAction):
      return [...state, action.appointment]
    case AppointmentActions.editAppointmentAction:
      const isAppointmentExist = state.find(appointment => appointment.id === action.appointment.id);
      if (!isAppointmentExist) {
        return state;
      }
      return state.map(appointment =>
        appointment.id === action.appointment.id
          ? action.appointment
          : appointment
      )
    case (AppointmentActions.searchAppointmentAction):
      if (action.searchTerm === "") {
        return initState
      }
      return state.filter(c => c.startDateAppointment == action.searchTerm)
    default:
      return state;
  }
}

export const removeAppointmentByIdAC = (appointmentId: number): RemoveAppointmentByIdActionType => {
  return { type: AppointmentActions.removeAppointmentByIdAction, appointmentId: appointmentId }
}


export const addAppointmentAC = (appointment: AppointmentType): AddAppointmentActionType => {
  return { type: AppointmentActions.addAppointmentAction, appointment: appointment }
}

export const editAppointmentAC = (appointment: AppointmentType): EditAppointmentActionType => {
  return { type: AppointmentActions.editAppointmentAction, appointment: appointment }
}

export const searchAppointmentAC = (searchTerm: string): SearchAppointmentActionType => {
  return { type: AppointmentActions.searchAppointmentAction, searchTerm: searchTerm }
}

