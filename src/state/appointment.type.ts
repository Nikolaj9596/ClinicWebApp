import { ClientShortType } from "./client.type"
import { DoctorShortType } from "./doctor.type"

export enum Actions {
  removeAppointmentByIdAction = "REMOVE_APPOINTMENT_BY_ID"
}

export type AppointmentType = {
  id: number
  doctor: DoctorShortType
  client: ClientShortType
  start_date_appointment: string 
  end_date_appointment: string | null
}

// Props
export type ListAppointmentsProps = {
  appointments: Array<AppointmentType>,
}

export type AppointmentDetailsPropsType = {
  getAppointmentById: (appointmentId: number) => AppointmentType | null
}

// Actions
export type RemoveAppointmentByIdActionType = {
  type: Actions.removeAppointmentByIdAction
  appointmentId: number
}

export type AppointmentReducerActionType = RemoveAppointmentByIdActionType 

