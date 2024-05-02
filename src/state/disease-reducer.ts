import { AddDiseaseActionType, DiseaseActions, DiseaseReducerActionType, DiseaseType, EditDiseaseActionType, RemoveDiseaseByIdActionType, SearchDiseaseActionType } from "./disease.type";


const initState: Array<DiseaseType> = [
  {
    "id": 1,
    "name": "Бронхит",
    "description": "Полное описание по заболеванию Бронхит",
    "category_disease": { "id": 1, "name": "Воздушно-капельное" }
  },
  {
    "id": 2,
    "name": "Астма",
    "description": "Полное описание по заболеванию Бронхит",
    "category_disease": { "id": 1, "name": "ORV" }
  },
  {
    "id": 3,
    "name": "Аргрит",
    "description": "Полное описание по заболеванию Бронхит",
    "category_disease": { "id": 1, "name": "Воздушно-капельное" }
  }
]


export const diseaseReducer = (state: Array<DiseaseType> = initState, action: DiseaseReducerActionType): Array<DiseaseType> => {
  switch (action.type) {
    case (DiseaseActions.removeDiseaseByIdAction):
      return state.filter(c => c.id !== action.diseaseId)
    case (DiseaseActions.addDiseaseAction):
      return [...state, action.disease]
    case DiseaseActions.editDiseaseAction:
      const isDiseaseExist = state.find(disease => disease.id === action.disease.id);
      if (!isDiseaseExist) {
        return state;
      }
      return state.map(disease =>
        disease.id === action.disease.id
          ? action.disease
          : disease
      )
    case (DiseaseActions.searchDiseaseAction):
      if (action.searchTerm === "") {
        return initState
      }
      return state.filter(c => c.name == action.searchTerm)
    default:
      return state;
  }
}

export const removeDiseaseByIdAC = (diseaseId: number): RemoveDiseaseByIdActionType => {
  return { type: DiseaseActions.removeDiseaseByIdAction, diseaseId: diseaseId }
}

export const addDiseaseAC = (disease: DiseaseType): AddDiseaseActionType => {
  return { type: DiseaseActions.addDiseaseAction, disease: disease }
}

export const editDiseaseAC = (disease: DiseaseType): EditDiseaseActionType => {
  return { type: DiseaseActions.editDiseaseAction, disease: disease }
}

export const searchDiseaseAC = (searchTerm: string): SearchDiseaseActionType => {
  return { type: DiseaseActions.searchDiseaseAction, searchTerm: searchTerm }
}

