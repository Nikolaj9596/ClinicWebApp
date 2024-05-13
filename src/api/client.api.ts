import axios from "axios";
import { ClientType } from "../state/client.type";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "jslfjlksjflksjlfkjsdkljflksjdfjs",
  },
};

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/clients",
  ...settings,
});

export const clientAPI = {
  getListClients() {
    const promise = api.get<Array<ClientType>>("/");
    return promise;
  },

  getDetailById(clientId: number) {
    const promise = api.get(`/${clientId}`);
    return promise;
  },
  createClient(client: ClientType) {
    const clientData = {
      firstName: client.firstName,
      lastName: client.lastName,
      middleName: client.middleName,
      avatar: client.avatar,
      dateBirthday: client.dateBirthday,
      address: client.address
    }
    const promise = api.post<ClientType>("/", clientData);
    return promise;
  },

  deleteClient(clientId: number) {
    const promise = api.delete(`/${clientId}`);
    return promise;
  },
  updateClient(client: ClientType) {
    const clientData = {
      firstName: client.firstName,
      lastName: client.lastName,
      middleName: client.middleName,
      avatar: client.avatar,
      dateBirthday: client.dateBirthday,
      address: client.address
    }
    const promise = api.patch<ClientType>(`/${client.id}`, clientData);
    return promise;
  },
};
