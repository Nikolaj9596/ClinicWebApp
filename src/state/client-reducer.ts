import { Actions, ClientReducerActionType, ClientType, RemoveClientByIdActionType } from "./client.type";


const initState: Array<ClientType> = [
  {
    "id": 1,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г.",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  },
  {
    "id": 2,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г.",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
  },
  {
    "id": 3,
    "firstName": "Владимир",
    "lastName": "Петров",
    "middleName": "Иванович",
    "dateBirthday": "1990-10-11",
    "address": "Московская обл. Москва г.",
    "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
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


