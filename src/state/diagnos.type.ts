import { ClientShortType } from "./client.type";
import { DiseaseShortType} from "./disease.type";
import { DoctorShortType } from "./doctor.type";

export enum Actions {
  removeDiagnosByIdAction = "REMOVE_DIAGNOS_BY_ID"
}


export type DiagnosType = {
  id: number;
  description: string;
  status: 'active' | 'inactive';
  name: string;
  client: ClientShortType;
  doctor: DoctorShortType;
  disease: Array<DiseaseShortType>
}

// Props
export type ListDiagnosisProps = {
  diagnosis: Array<DiagnosType>,
}

export type DiagnosDetailsPropsType = {
  getDiagnosById: (diagnosId: number) => DiagnosType | null
}

// Actions
export type RemoveDiagnosByIdActionType = {
  type: Actions.removeDiagnosByIdAction
  diagnosId: number
}

export type DiagnosReducerActionType = RemoveDiagnosByIdActionType

