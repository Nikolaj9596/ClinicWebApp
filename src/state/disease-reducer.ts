import { diseaseAPI } from "../api/disease.api";
import { AddDiseaseActionType, DiseaseActions, DiseaseReducerActionType, DiseaseType, EditDiseaseActionType, GetListDiseaseActionType, RemoveDiseaseByIdActionType, SearchDiseaseActionType } from "./disease.type";


const initState: Array<DiseaseType> = []

export const diseaseReducer = (state: Array<DiseaseType> = initState, action: DiseaseReducerActionType): Array<DiseaseType> => {
  switch (action.type) {
    case (DiseaseActions.removeDiseaseByIdAction):

      const deleteDisease = async () => {
        try {
          await diseaseAPI.deleteDisease(action.diseaseId);
        } catch (error) {
          console.error("Error create disease", error);
        }
      };
      deleteDisease();
      return state.filter(c => c.id !== action.diseaseId)

    case (DiseaseActions.addDiseaseAction):

      const createDisease = async () => {
        try {
          await diseaseAPI.createDisease(action.disease);
        } catch (error) {
          console.error("Error create disease", error);
        }
      };
      createDisease();
      return [...state, action.disease]

    case DiseaseActions.editDiseaseAction:
      const isDiseaseExist = state.find(disease => disease.id === action.disease.id);
      if (!isDiseaseExist) {
        return state;
      }

      const editDisease = async () => {
        try {
          await diseaseAPI.updateDisease(action.disease);
        } catch (error) {
          console.error("Error create disease", error);
        }
      };
      editDisease();
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

    case (DiseaseActions.getListDiseaseAction):
      return action.payload

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

export const getListDiseaseAC = (payload: Array<DiseaseType>): GetListDiseaseActionType => {
  return { type: DiseaseActions.getListDiseaseAction, payload: payload }
}
