import React from 'react';
import { TableStylesType } from './core.type';

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

export type ListDoctorsProps = {
  doctors: Array<DoctorType>
  tableStyles: TableStylesType
}

export type DoctorDetailsPropsType = {
  getDoctorById: (doctorId: number) => DoctorType | null
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
