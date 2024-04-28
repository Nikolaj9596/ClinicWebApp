import { Actions, AddClientActionType, ClientReducerActionType, ClientType, EditClientActionType, RemoveClientByIdActionType, SearchClientActionType } from "./client.type";


const initState: Array<ClientType> = [
  {
    "id": 1,
    "firstName": "Владимир",
    "lastName": "Васильев",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г.",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  },
  {
    "id": 2,
    "firstName": "Владимир",
    "lastName": "Дудкин",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г.",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  },
  {
    "id": 3,
    "firstName": "Владимир",
    "lastName": "Мальков",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г.",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  }
]


export const clientReducer = (state: Array<ClientType> = initState, action: ClientReducerActionType): Array<ClientType> => {
  switch (action.type) {
    case (Actions.removeClientByIdAction):
      return state.filter(c => c.id !== action.clientId)
    case (Actions.addClientAction):
      return [...state, action.client]
    case Actions.editClientAction:
      const isClientExist = state.find(client => client.id === action.client.id);
      if (!isClientExist) {
        return state;
      }
      return state.map(client =>
        client.id === action.client.id
          ? action.client
          : client
      )
    case (Actions.searchClientAction):
      if (action.searchTerm === ""){
        return initState 
      }
      return state.filter(c => c.lastName == action.searchTerm)
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

