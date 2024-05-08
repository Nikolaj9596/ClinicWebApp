import { Dispatch } from 'redux';
import { doctorAPI } from '../api/doctor.api';
import { getListDoctordAC } from '../state/doctor-reducer';

export const fetchDoctors = () => async (dispatch: Dispatch) => {
  try {
    const response = await doctorAPI.getListDoctors();
    dispatch(getListDoctordAC(response.data));
  } catch (error) {
    console.error("Error fetching doctors", error);
  }
};
