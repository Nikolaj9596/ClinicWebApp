import axios from "axios";
import { DoctorType } from "../state/doctor.type";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "jslfjlksjflksjlfkjsdkljflksjdfjs",
  },
};

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/doctors",
  ...settings,
});

export const doctorAPI = {
  getListDoctors() {
    const promise = api.get<Array<DoctorType>>("/");
    return promise;
  },

  getDetailById(doctorId: number) {
    const promise = api.get(`/${doctorId}`);
    return promise;
  },
  createDoctor(doctor: DoctorType) {
    const promise = api.post<DoctorType>("doctors", doctor);
    return promise;
  },
  deleteDoctor(doctorId: number) {
    const promise = api.delete(`/${doctorId}`);
    return promise;
  },
  updateDoctor(doctor: DoctorType) {
    const promise = api.patch<DoctorType>(`/${doctor.id}`, doctor);
    return promise;
  },
};
