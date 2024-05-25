import axios from "axios";
import { AppointmentType } from "../state/appointment.type";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "jslfjlksjflksjlfkjsdkljflksjdfjs",
  },
};

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/appointments",
  ...settings,
});

export const appointmentAPI = {
  getListAppointments() {
    const promise = api.get<Array<AppointmentType>>("/");
    return promise;
  },

  getDetailById(appointmentId: number) {
    const promise = api.get(`/${appointmentId}`);
    return promise;
  },
  
  createAppointment(appointment: AppointmentType) {
    console.log(appointment.startDateAppointment)
    const appointmentData = {
      startDateAppointment: appointment.startDateAppointment,
      endDateAppointment: appointment.endDateAppointment,
      doctor: appointment.doctor.id,
      client: appointment.client.id
    }
    const promise = api.post<AppointmentType>("/", appointmentData);
    return promise;
  },

  deleteAppointment(appointmentId: number) {
    const promise = api.delete(`/${appointmentId}`);
    return promise;
  },
  updateAppointment(appointment: AppointmentType) {
    const appointmentData = {
      startDateAppointment: appointment.startDateAppointment,
      endDateAppointment: appointment.endDateAppointment,
      doctor: appointment.doctor.id,
      client: appointment.client.id
    }
    const promise = api.patch<AppointmentType>(`/${appointment.id}`, appointmentData);
    return promise;
  },
};
