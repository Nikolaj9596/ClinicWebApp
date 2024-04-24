export enum Actions {
  removeClientByIdAction = "REMOVE_CLIENT_BY_ID",
  addClientAction = "ADD_CLIENT",
  editClientAction = "EDIT_CLIENT"
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
  handleAddClient: (client: ClientType) => void,
  handleDeleteClient: (clientId: number) => void
  handleEditClient: (client: ClientType) => void
}

export type ClientDetailsPropsType = {
  getClientById: (clientId: number) => ClientType | null
  handleDeleteClient: (clientId: number) => void
  handleEditClient: (client: ClientType) => void
}

// Actions
export type RemoveClientByIdActionType = {
  type: Actions.removeClientByIdAction
  clientId: number
}

export type AddClientActionType = {
  type: Actions.addClientAction
  client: ClientType
}

export type EditClientActionType = {
  type: Actions.editClientAction
  client: ClientType
}

export type ClientReducerActionType = RemoveClientByIdActionType | AddClientActionType | EditClientActionType

