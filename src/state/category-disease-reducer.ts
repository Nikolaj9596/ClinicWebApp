import { CategoryDiseasesActions, CategoryDiseasesReducerActionType, CategoryDiseasesType, GetListCategoryDiseasesActionType } from "./category-disease.type";

const initState: Array<CategoryDiseasesType> | [] = []

export const categoryDiseasesReducer = (state: Array<CategoryDiseasesType> = initState, action: CategoryDiseasesReducerActionType) => {
  switch (action.type) {
    case (CategoryDiseasesActions.getListCategoryDiseasesAction):
      return action.payload
    default:
      return state;
  }
}


export const getListCategoryDiseasesdAC = (payload: Array<CategoryDiseasesType>): GetListCategoryDiseasesActionType => {
  return { type: CategoryDiseasesActions.getListCategoryDiseasesAction, payload: payload }
}

