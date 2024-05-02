import { ClientShortType, ClientType } from "./client.type"
import { DoctorShortType, DoctorType } from "./doctor.type"

export type AppointmentType = {
  id: number
  doctor: DoctorShortType
  client: ClientShortType
  startDateAppointment: string 
  endDateAppointment: string | null
}

// Props
export type ListAppointmentsProps = {
  appointments: Array<AppointmentType>,
  doctors: Array<DoctorType>
  clients: Array<ClientType>
  handleAddAppointment: (docktor: AppointmentType) => void
  handleDeleteAppointment: (docktorId: number) => void
  handleEditAppointment: (docktor: AppointmentType) => void
  handleSearchAppointment: (searchTerm: string) => void
}

export type AppointmentDetailsPropsType = {
  getAppointmentById: (appointmentId: number) => AppointmentType | null
  doctors: Array<DoctorType>
  clients: Array<ClientType>
  handleDeleteAppointment: (docktorId: number) => void
  handleEditAppointment: (docktor: AppointmentType) => void
}

// Actions
export enum AppointmentActions {
  removeAppointmentByIdAction = "REMOVE_APPOINTMENT_BY_ID",
  addAppointmentAction = "ADD_DISEASE",
  editAppointmentAction = "EDIT_DISEASE",
  searchAppointmentAction = "SEARCH_DISEASE"
}

export type RemoveAppointmentByIdActionType = {
  type: AppointmentActions.removeAppointmentByIdAction
  appointmentId: number
}

export type AddAppointmentActionType = {
  type: AppointmentActions.addAppointmentAction
  appointment: AppointmentType
}

export type EditAppointmentActionType = {
  type: AppointmentActions.editAppointmentAction
  appointment: AppointmentType
}

export type SearchAppointmentActionType = {
  type: AppointmentActions.searchAppointmentAction
  searchTerm: string
}

export type AppointmentReducerActionType = (
  RemoveAppointmentByIdActionType
  | AddAppointmentActionType
  | EditAppointmentActionType
  | SearchAppointmentActionType
)



