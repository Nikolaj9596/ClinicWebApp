import { Action } from "@remix-run/router";
import { Actions, ClientReducerActionType, ClientType, RemoveClientByIdActionType } from "./client.type";


const initState: Array<ClientType> = [
  {
    "id": 1,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г."
  },
  {
    "id": 2,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г."
  },
  {
    "id": 3,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г."
  }
]


export const clientReducer = (state: Array<ClientType> = initState, action: ClientReducerActionType): Array<ClientType> => {
  switch (action.type) {
    default:
      return state;
  }
}

export const removeClienByIdAC = (clientId: number): RemoveClientByIdActionType => {
  return { type: Actions.removeClientByIdAction, clientId: clientId }
}


