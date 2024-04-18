export enum Actions {
  removeClientByIdAction = "REMOVE_CLIENT_BY_ID"
}

export type ClientType = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  dateBirthday: string;
  address: string;
  avatar: string;

}

export type ClientShortType = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  avatar: string;

}
// Props
export type ListClientsProps = {
  clients: Array<ClientType>,
}

export type ClientDetailsPropsType = {
  getClientById: (clientId: number) => ClientType | null
}

// Actions
export type RemoveClientByIdActionType = {
  type: Actions.removeClientByIdAction
  clientId: number
}

export type ClientReducerActionType = RemoveClientByIdActionType 

