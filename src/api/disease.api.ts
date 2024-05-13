import axios from "axios";
import { DiseaseType } from "../state/disease.type";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "jslfjlksjflksjlfkjsdkljflksjdfjs",
  },
};

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/diseases",
  ...settings,
});

export const diseaseAPI = {
  getListDiseases() {
    const promise = api.get<Array<DiseaseType>>("/");
    return promise;
  },

  getDetailById(diseaseId: number) {
    const promise = api.get(`/${diseaseId}`);
    return promise;
  },
  createDisease(disease: DiseaseType) {
    const diseaseData = {
      description: disease.description,
      name: disease.name,
      category_disease_id: disease.category_disease.id
    }
    const promise = api.post<DiseaseType>("/", diseaseData);
    return promise;
  },

  deleteDisease(diseaseId: number) {
    const promise = api.delete(`/${diseaseId}`);
    return promise;
  },

  updateDisease(disease: DiseaseType) {
    const diseaseData = {
      description: disease.description,
      name: disease.name,
      category_disease_id: disease.category_disease.id
    }
    const promise = api.patch<DiseaseType>(`/${disease.id}`, diseaseData);
    return promise;
  },
};
