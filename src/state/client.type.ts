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
  handleSearchClient: (searchTerm: string) => void
}

export type ClientDetailsPropsType = {
  getClientById: (clientId: number) => ClientType | null
  handleDeleteClient: (clientId: number) => void
  handleEditClient: (client: ClientType) => void
}

// Actions

export enum Actions {
  removeClientByIdAction = "REMOVE_CLIENT_BY_ID",
  addClientAction = "ADD_CLIENT",
  editClientAction = "EDIT_CLIENT",
  searchClientAction = "SEARCH_CLIENT",
  getListClientAction = "GET_LIST_CLIENT_ACTION"
}

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

export type SearchClientActionType = {
  type: Actions.searchClientAction
  searchTerm: string
}


export type GetListClientActionType = {
  type: Actions.getListClientAction
  payload: Array<ClientType>
}

export type ClientReducerActionType = (
  RemoveClientByIdActionType
  | AddClientActionType
  | EditClientActionType
  | SearchClientActionType
  | GetListClientActionType
)

