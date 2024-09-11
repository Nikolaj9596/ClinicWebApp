import axios from "axios";
import { DiagnosType } from "../state/diagnos.type";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "jslfjlksjflksjlfkjsdkljflksjdfjs",
  },
};

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/diagnosis",
  ...settings,
});

export const diagnosAPI = {
  getListDiagnosis() {
    const promise = api.get<Array<DiagnosType>>("/");
    return promise;
  },

  getDetailById(diagnosId: number) {
    const promise = api.get(`/${diagnosId}`);
    return promise;
  },

  createDiagnos(diagnos: DiagnosType) {
    const diagnosData = {
      description: diagnos.description,
      status: diagnos.status,
      name: diagnos.name,
      disease: diagnos.diseases.map(d => d.id),
      doctor: diagnos.doctor.id,
      client: diagnos.client.id
    }
    const promise = api.post<DiagnosType>("/", diagnosData);
    return promise;
  },

  deleteDiagnos(diagnosId: number) {
    const promise = api.delete(`/${diagnosId}`);
    return promise;
  },

  updateDiagnos(diagnos: DiagnosType) {
    const diagnosData = {
      description: diagnos.description,
      status: diagnos.status,
      name: diagnos.name,
      disease: diagnos.diseases.map(d => d.id),
      doctor: diagnos.doctor.id,
      client: diagnos.client.id
    }
    const promise = api.patch<DiagnosType>(`/${diagnos.id}`, diagnosData);
    return promise;
  },
};
