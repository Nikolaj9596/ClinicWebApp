export type CategoryDiseasesType = {
  name: string
  id: number
}

// Actions
export enum CategoryDiseasesActions {
  getListCategoryDiseasesAction = "GET_LIST_CATEGORY_DISEASES_ACTION"
}

export type GetListCategoryDiseasesActionType = {
  type: CategoryDiseasesActions.getListCategoryDiseasesAction
  payload: Array<CategoryDiseasesType>
}

export type CategoryDiseasesReducerActionType = (
  | GetListCategoryDiseasesActionType
)

