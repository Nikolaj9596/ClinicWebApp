import { clientAPI } from "../api/client.api";
import { Actions, AddClientActionType, ClientReducerActionType, ClientType, EditClientActionType, GetListClientActionType, RemoveClientByIdActionType, SearchClientActionType } from "./client.type";


const initState: Array<ClientType> | [] = []

export const clientReducer = (state: Array<ClientType> = initState, action: ClientReducerActionType): Array<ClientType> => {
  switch (action.type) {
    case (Actions.removeClientByIdAction):
      const deleteClient = async () => {
        try {
          await clientAPI.deleteClient(action.clientId);
        } catch (error) {
          console.error("Error create doctor", error);
        }
      };
      deleteClient();
      return state.filter(c => c.id !== action.clientId)

    case (Actions.addClientAction):
      const createClient = async () => {
        try {
          await clientAPI.createClient(action.client);
        } catch (error) {
          console.error("Error create client", error);
        }
      };
      createClient();
      return [...state, action.client]

    case Actions.editClientAction:
      const isClientExist = state.find(client => client.id === action.client.id);
      if (!isClientExist) {
        return state;
      }

      const editClient = async () => {
        try {
          await clientAPI.updateClient(action.client);
        } catch (error) {
          console.error("Error create client", error);
        }
      };
      editClient();
      return state.map(client =>
        client.id === action.client.id
          ? action.client
          : client
      )
    case (Actions.searchClientAction):
      if (action.searchTerm === "") {
        return initState
      }
      return state.filter(c => c.lastName == action.searchTerm)
    case (Actions.getListClientAction):
      return action.payload
    default:
      return state;
  }
}

export const removeClienByIdAC = (clientId: number): RemoveClientByIdActionType => {
  return { type: Actions.removeClientByIdAction, clientId: clientId }
}

export const addClienAC = (client: ClientType): AddClientActionType => {
  return { type: Actions.addClientAction, client: client }
}

export const editClienAC = (client: ClientType): EditClientActionType => {
  return { type: Actions.editClientAction, client: client }
}

export const searchClientAC = (searchTerm: string): SearchClientActionType => {
  return { type: Actions.searchClientAction, searchTerm: searchTerm }
}

export const getListClientdAC = (payload: Array<ClientType>): GetListClientActionType => {
  return { type: Actions.getListClientAction, payload: payload }
}
