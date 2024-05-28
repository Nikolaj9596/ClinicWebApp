import { diagnosAPI } from "../api/diagnos.api";
import {
  AddDiagnosActionType,
  DiagnosActions,
  DiagnosReducerActionType,
  DiagnosType,
  EditDiagnosActionType,
  GetListDiagnosActionType,
  RemoveDiagnosByIdActionType,
  SearchDiagnosActionType
} from "./diagnos.type";


const initState: Array<DiagnosType> = []


export const diagnosReducer = (
  state: Array<DiagnosType> = initState,
  action: DiagnosReducerActionType
): Array<DiagnosType> => {
  switch (action.type) {
    case (DiagnosActions.removeDiagnosByIdAction):
      const deleteDiagnos = async () => {
        try {
          await diagnosAPI.deleteDiagnos(action.diagnosId);
        } catch (error) {
          console.error("Error delete diagnos", error);
        }
      };
      deleteDiagnos();
      return state.filter(c => c.id !== action.diagnosId)

    case (DiagnosActions.addDiagnosAction):
      const createDiagnos = async () => {
        try {
          await diagnosAPI.createDiagnos(action.diagnos);
        } catch (error) {
          console.error("Error create diagnos", error);
        }
      };
      createDiagnos();
      return [...state, action.diagnos]

    case DiagnosActions.editDiagnosAction:
      const isDiagnosExist = state.find(diagnos => diagnos.id === action.diagnos.id);
      if (!isDiagnosExist) {
        return state;
      }

      const editDiagnos = async () => {
        try {
          await diagnosAPI.updateDiagnos(action.diagnos);
        } catch (error) {
          console.error("Error update diagnos", error);
        }
      };
      editDiagnos();
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

    case (DiagnosActions.getListDiagnosAction):
      return action.payload
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

export const getListDiagnosAC = (payload: Array<DiagnosType>): GetListDiagnosActionType => {
  return { type: DiagnosActions.getListDiagnosAction, payload: payload }
}
