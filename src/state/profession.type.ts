export type ProfessionType = {
  name: string
  id: number
}

// Actions
export enum ProfessionActions {
  getListProfessionAction = "GET_LIST_PROFESSION_ACTION"
}

export type GetListProfessionActionType = {
  type: ProfessionActions.getListProfessionAction
  payload: Array<ProfessionType>
}

export type ProfessionReducerActionType = (
  | GetListProfessionActionType
)

