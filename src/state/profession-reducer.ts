import { ProfessionActions, ProfessionReducerActionType, ProfessionType,  GetListProfessionActionType } from "./profession.type";

const initState: Array<ProfessionType> | [] = []

export const professionReducer = (state: Array<ProfessionType> = initState, action: ProfessionReducerActionType) => {
  switch (action.type) {
    case (ProfessionActions.getListProfessionAction):
      return action.payload
    default:
      return state;
  }
}


export const getListProfessiondAC = (payload: Array<ProfessionType>): GetListProfessionActionType => {
  return { type: ProfessionActions.getListProfessionAction, payload: payload }
}

