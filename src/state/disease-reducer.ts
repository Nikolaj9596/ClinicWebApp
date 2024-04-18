import { Actions, DiseaseReducerActionType, DiseaseType, RemoveDiseaseByIdActionType } from "./disease.type";


const initState: Array<DiseaseType> = [
  {
    "id": 1,
    "name": "Бронхит",
    "description": "Полное описание по заболеванию Бронхит",
    "category_disease": "Воздушно-капельное"
  },
  {
    "id": 2,
    "name": "Астма",
    "description": "Полное описание по заболеванию Бронхит",
    "category_disease": "Воздушно-капельное"
  },
  {
    "id": 3,
    "name": "Аргрит",
    "description": "Полное описание по заболеванию Бронхит",
    "category_disease": "Воздушно-капельное"
  }
]


export const diseaseReducer = (state: Array<DiseaseType> = initState, action: DiseaseReducerActionType): Array<DiseaseType> => {
  switch (action.type) {
    default:
      return state;
  }
}

export const removeDiseaseByIdAC = (diseaseId: number): RemoveDiseaseByIdActionType => {
  return { type: Actions.removeDiseaseByIdAction, diseaseId: diseaseId }
}


