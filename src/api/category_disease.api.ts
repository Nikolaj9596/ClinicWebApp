import axios from "axios";
import { CategoryDiseasesType } from "../state/category-disease.type";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "jslfjlksjflksjlfkjsdkljflksjdfjs",
  },
};

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/category_diseases",
  ...settings,
});

export const categoryDiseaseAPI = {
  getListCategoryDisease() {
    const promise = api.get<Array<CategoryDiseasesType>>("/");
    return promise;
  },

};
