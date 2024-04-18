
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


export type DoctorShortType = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  profession: { id: number, name: string };
  avatar: string;
};

export type ListDoctorsProps = {
  doctors: Array<DoctorType>
}


export type DoctorDetailsPropsType = {
  getDoctorById: (doctorId: number) => DoctorType | null;
}

// Actions
export enum DoctorActions {
  removeDoctorByIdAction = "REMOVE_DOCTOR_BY_ID"
}

export type RemoveDoctorByIdActionType = {
  type: DoctorActions.removeDoctorByIdAction
  doctorId: number
}

export type DoctorReducerActionType = RemoveDoctorByIdActionType 
