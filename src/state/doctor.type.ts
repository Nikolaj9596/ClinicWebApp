
export type DoctorType = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  profession: { id: number, name: string };
  dateBirthday: string;
  dateStartWork: string;
  avatar: string;
};

export type ProfessionType = {
  name: string
  id: number
}
export type DoctorShortType = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  profession: ProfessionType;
  avatar: string;
};

export type ListDoctorsProps = {
  doctors: Array<DoctorType>
  professions: Array<ProfessionType>
  handleAddDoctor: (docktor: DoctorType) => void
  handleDeleteDoctor: (docktorId: number) => void
  handleEditDoctor: (docktor: DoctorType) => void
  handleSearchDoctor: (searchTerm: string) => void
}


export type DoctorDetailsPropsType = {
  professions: Array<ProfessionType>
  getDoctorById: (doctorId: number) => DoctorType | null;
  handleDeleteDoctor: (docktorId: number) => void
  handleEditDoctor: (docktor: DoctorType) => void
}

// Actions
export enum DoctorActions {
  removeDoctorByIdAction = "REMOVE_DOCTOR_BY_ID",
  addDoctorAction = "ADD_DOCTOR",
  editDoctorAction = "EDIT_DOCTOR",
  searchDoctorAction = "SEARCH_DOCTOR"
}

export type RemoveDoctorByIdActionType = {
  type: DoctorActions.removeDoctorByIdAction
  doctorId: number
}

export type AddDoctorActionType = {
  type: DoctorActions.addDoctorAction
  doctor: DoctorType
}

export type EditDoctorActionType = {
  type: DoctorActions.editDoctorAction
  doctor: DoctorType
}

export type SearchDoctorActionType = {
  type: DoctorActions.searchDoctorAction
  searchTerm: string
}

export type DoctorReducerActionType = (
  RemoveDoctorByIdActionType
  | AddDoctorActionType
  | EditDoctorActionType
  | SearchDoctorActionType
)

