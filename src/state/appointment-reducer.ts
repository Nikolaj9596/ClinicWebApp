import { appointmentAPI } from "../api/appointment.api";
import { AddAppointmentActionType, AppointmentActions, AppointmentReducerActionType, AppointmentType, EditAppointmentActionType, GetListAppointmentsActionType, RemoveAppointmentByIdActionType, SearchAppointmentActionType } from "./appointment.type";


const initState: Array<AppointmentType> = []


export const appointmentReducer = (state: Array<AppointmentType> = initState, action: AppointmentReducerActionType): Array<AppointmentType> => {

  console.log(action.type)
  switch (action.type) {
    case (AppointmentActions.removeAppointmentByIdAction):
      const deleteAppointment = async () => {
        try {
          await appointmentAPI.deleteAppointment(action.appointmentId);
        } catch (error) {
          console.error("Error delete appointment", error);
        }
      };
      deleteAppointment();
      return state.filter(c => c.id !== action.appointmentId)

    case (AppointmentActions.addAppointmentAction):
      const createAppointment = async () => {
        try {
          await appointmentAPI.createAppointment(action.appointment);
        } catch (error) {
          console.error("Error create appointment", error);
        }
      };
      createAppointment();
      return [...state, action.appointment]

    case AppointmentActions.editAppointmentAction:
      const isAppointmentExist = state.find(appointment => appointment.id === action.appointment.id);
      if (!isAppointmentExist) {
        return state;
      }

      const editAppointment = async () => {
        try {
          await appointmentAPI.updateAppointment(action.appointment);
        } catch (error) {
          console.error("Error update appointment", error);
        }
      };
      editAppointment();
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

    case (AppointmentActions.getListAppointmentsAction):
      return action.payload
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

export const getListAppointmentsAC = (payload: Array<AppointmentType>): GetListAppointmentsActionType => {
  return { type: AppointmentActions.getListAppointmentsAction, payload: payload }
}
