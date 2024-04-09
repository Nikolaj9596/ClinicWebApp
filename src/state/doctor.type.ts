import React from 'react';

export type DoctorType = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  profession: { id: number, name: string };
  dateBirthday: string;
  dateStartWork: string;
};

export type ListDoctorsProps = {
  doctors: Array<DoctorType>
}


export enum DoctorActions {
  removeDoctorByIdAction = "REMOVE_DOCTOR_BY_ID"
}

// Actions
export type RemoveDoctorByIdActionType = {
  type: DoctorActions.removeDoctorByIdAction
  doctorId: number
}

export type DoctorReducerActionType = RemoveDoctorByIdActionType 
