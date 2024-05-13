import axios from "axios";
import { ProfessionType } from "../state/doctor.type";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "jslfjlksjflksjlfkjsdkljflksjdfjs",
  },
};

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/professions",
  ...settings,
});

export const professionAPI = {
  getListProfessions() {
    const promise = api.get<Array<ProfessionType>>("/");
    return promise;
  },

  getDetailById(professionId: number) {
    const promise = api.get(`/${professionId}`);
    return promise;
  },
};
