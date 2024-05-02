export type CategoryDiseasesType = {
  id: number;
  name: string;
}

export type DiseaseType = {
  id: number;
  description: string;
  name: string;
  category_disease: CategoryDiseasesType;
}

export type DiseaseShortType = {
  id: number;
  name: string;
}

// Props
export type ListDiseasesProps = {
  diseases: Array<DiseaseType>,
  categoryDiseases: Array<CategoryDiseasesType>
  handleAddDisease: (disease: DiseaseType) => void
  handleDeleteDisease: (diseaseId: number) => void
  handleEditDisease: (disease: DiseaseType) => void
  handleSearchDisease: (searchTerm: string) => void
}

export type DiseaseDetailsPropsType = {
  categoryDiseases: Array<CategoryDiseasesType>
  handleAddDisease: (disease: DiseaseType) => void
  getDiseaseById: (diseaseId: number) => DiseaseType | null
  handleDeleteDisease: (diseaseId: number) => void
  handleEditDisease: (disease: DiseaseType) => void
}

// Actions
export enum DiseaseActions {
  removeDiseaseByIdAction = "REMOVE_DISEASE_BY_ID",
  addDiseaseAction = "ADD_DISEASE",
  editDiseaseAction = "EDIT_DISEASE",
  searchDiseaseAction = "SEARCH_DISEASE"
}

export type RemoveDiseaseByIdActionType = {
  type: DiseaseActions.removeDiseaseByIdAction
  diseaseId: number
}

export type AddDiseaseActionType = {
  type: DiseaseActions.addDiseaseAction
  disease: DiseaseType
}

export type EditDiseaseActionType = {
  type: DiseaseActions.editDiseaseAction
  disease: DiseaseType
}

export type SearchDiseaseActionType = {
  type: DiseaseActions.searchDiseaseAction
  searchTerm: string
}

export type DiseaseReducerActionType = (
  RemoveDiseaseByIdActionType
  | AddDiseaseActionType
  | EditDiseaseActionType
  | SearchDiseaseActionType
)


