import { Actions, DiagnosReducerActionType, DiagnosType, RemoveDiagnosByIdActionType } from "./diagnos.type";


const initState: Array<DiagnosType> = [
  {
    "id": 1,
    "name": "Бронхит и Насморк",
    "description": "Полное описание по заболеванию Бронхит",
    "client": {
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "doctor":{
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "profession": { "id": 1, "name": "Стоматолог" },
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "disease": [
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
    "doctor":{
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "profession": { "id": 1, "name": "Стоматолог" },
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "disease": [],
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
    "doctor":{
      "id": 1,
      "firstName": "Владимир",
      "lastName": "Петров",
      "middleName": "Иванович",
      "profession": { "id": 1, "name": "Стоматолог" },
      "avatar": "https://gas-kvas.com/uploads/posts/2023-02/1675346690_gas-kvas-com-p-pop-art-litso-risunok-22.png"
    },
    "disease": [
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
    default:
      return state;
  }
}

export const removeDiagnosByIdAC = (diagnosId: number): RemoveDiagnosByIdActionType => {
  return { type: Actions.removeDiagnosByIdAction, diagnosId: diagnosId }
}


