export enum Actions {
  removeDiseaseByIdAction = "REMOVE_DISEASE_BY_ID"
}

export type DiseaseType = {
  id: number;
  description: string;
  name: string;
  category_disease: string;
}

export type DiseaseShortType = {
  id: number;
  name: string;
}

// Props
export type ListDiseasesProps = {
  diseases: Array<DiseaseType>,
}

export type DiseaseDetailsPropsType = {
  getDiseaseById: (diseaseId: number) => DiseaseType | null
}

// Actions
export type RemoveDiseaseByIdActionType = {
  type: Actions.removeDiseaseByIdAction
  diseaseId: number
}

export type DiseaseReducerActionType = RemoveDiseaseByIdActionType 

