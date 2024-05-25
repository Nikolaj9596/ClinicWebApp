import { AddDiagnosActionType, DiagnosActions, DiagnosReducerActionType, DiagnosType, EditDiagnosActionType, RemoveDiagnosByIdActionType, SearchDiagnosActionType } from "./diagnos.type";


const initState: Array<DiagnosType> = [
  {
    "id": 1,
    "name": "Бронхит и Насморк",
    "description": "Полное описание по заболеванию Бронхит",
    "client": {
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Ветров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "doctor": {
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Мальков",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "diseases": [
      {
        "id": 1,
        "name": "Бронхит",
      },
      {
        "id": 2,
        "name": "Бронхит",
      },
      {
        "id": 3,
        "name": "Бронхит",
      },
    ],
    "status": "active"
  },
  {
    "id": 2,
    "name": "Астма",
    "description": "Полное описание по заболеванию Бронхит",
    "client": {
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "doctor": {
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "diseases": [],
    "status": "active"
  },
  {
    "id": 3,
    "name": "Аргрит",
    "description": "Полное описание по заболеванию Бронхит",
    "client": {
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "doctor": {
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "diseases": [
      {
        "id": 1,
        "name": "Бронхит",
      },
    ],
    "status": "active"
  }
]


export const diagnosReducer = (state: Array<DiagnosType> = initState, action: DiagnosReducerActionType): Array<DiagnosType> => {
  switch (action.type) {
    case (DiagnosActions.removeDiagnosByIdAction):
      return state.filter(c => c.id !== action.diagnosId)
    case (DiagnosActions.addDiagnosAction):
      return [...state, action.diagnos]
    case DiagnosActions.editDiagnosAction:
      const isDiagnosExist = state.find(diagnos => diagnos.id === action.diagnos.id);
      if (!isDiagnosExist) {
        return state;
      }
      return state.map(diagnos =>
        diagnos.id === action.diagnos.id
          ? action.diagnos
          : diagnos
      )
    case (DiagnosActions.searchDiagnosAction):
      if (action.searchTerm === "") {
        return initState
      }
      return state.filter(c => c.name == action.searchTerm)
    default:
      return state;
  }
}

export const removeDiagnosByIdAC = (diagnosId: number): RemoveDiagnosByIdActionType => {
  return { type: DiagnosActions.removeDiagnosByIdAction, diagnosId: diagnosId }
}


export const addDiagnosAC = (diagnos: DiagnosType): AddDiagnosActionType => {
  return { type: DiagnosActions.addDiagnosAction, diagnos: diagnos }
}

export const editDiagnosAC = (diagnos: DiagnosType): EditDiagnosActionType => {
  return { type: DiagnosActions.editDiagnosAction, diagnos: diagnos }
}

export const searchDiagnosAC = (searchTerm: string): SearchDiagnosActionType => {
  return { type: DiagnosActions.searchDiagnosAction, searchTerm: searchTerm }
}

