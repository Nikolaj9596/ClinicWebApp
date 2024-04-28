import { ClientShortType, ClientType } from "./client.type";
import { DiseaseShortType, DiseaseType } from "./disease.type";
import { DoctorShortType, DoctorType } from "./doctor.type";

export type DiagnosType = {
  id: number;
  description: string;
  status: 'active' | 'inactive';
  name: string;
  client: ClientShortType;
  doctor: DoctorShortType;
  diseases: Array<DiseaseShortType>
}

// Props
export type ListDiagnosisProps = {
  diagnosis: Array<DiagnosType>
  doctors: Array<DoctorType>
  clients: Array<ClientType>
  diseases: Array<DiseaseType>
  handleAddDiagnos: (docktor: DiagnosType) => void
  handleDeleteDiagnos: (docktorId: number) => void
  handleEditDiagnos: (docktor: DiagnosType) => void
  handleSearchDiagnos: (searchTerm: string) => void
}

export type DiagnosDetailsPropsType = {
  doctors: Array<DoctorType>
  clients: Array<ClientType>
  diseases: Array<DiseaseType>
  getDiagnosById: (diagnosId: number) => DiagnosType | null
  handleDeleteDiagnos: (docktorId: number) => void
  handleEditDiagnos: (docktor: DiagnosType) => void
}

// Actions
export enum DiagnosActions {
  removeDiagnosByIdAction = "REMOVE_DIAGNOS_BY_ID",
  addDiagnosAction = "ADD_DIAGNOS",
  editDiagnosAction = "EDIT_DIAGNOS",
  searchDiagnosAction = "SEARCH_DIAGNOS"
}

export type RemoveDiagnosByIdActionType = {
  type: DiagnosActions.removeDiagnosByIdAction
  diagnosId: number
}

export type AddDiagnosActionType = {
  type: DiagnosActions.addDiagnosAction
  diagnos: DiagnosType
}

export type EditDiagnosActionType = {
  type: DiagnosActions.editDiagnosAction
  diagnos: DiagnosType
}

export type SearchDiagnosActionType = {
  type: DiagnosActions.searchDiagnosAction
  searchTerm: string
}

export type DiagnosReducerActionType = (
  RemoveDiagnosByIdActionType
  | AddDiagnosActionType
  | EditDiagnosActionType
  | SearchDiagnosActionType
)


