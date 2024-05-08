import React, { useEffect, useState } from "react";
import "./ListDoctors.css";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DoctorType, ListDoctorsProps } from "../../state/doctor.type";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { tableStyles } from "../../styles";
import SearchAndFilter from "../Search/Search";
import AddDoctorPopup from "./AddDoctorPopup/AddDoctorPopup";
import { useDispatch } from "react-redux";
import { fetchDoctors } from "../../thunks/docker-thunk";
import { getListDoctordAC } from "../../state/doctor-reducer";
import { doctorAPI } from "../../api/doctor.api";

const ListDoctors: React.FC<ListDoctorsProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await doctorAPI.getListDoctors();
        dispatch(getListDoctordAC(response.data));
      } catch (error) {
        console.error("Error fetching doctors", error);
      }
    };

    fetchDoctors();
  }, [dispatch]);

  const [openPopup, setOpenPopup] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<DoctorType>({
    id: 0,
    lastName: "",
    firstName: "",
    middleName: "",
    dateBirthday: "",
    dateStartWork: "",
    profession: { id: 0, name: "" },
    avatar: "",
  });
  const handleVisibilityDetail = (doctorId: number) => {
    navigate(`/doctors/${doctorId}`);
  };

  const handleOpenPopup = (doctor: DoctorType | null) => {
    if (doctor !== null) {
      setEditingDoctor(doctor);
    }
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <SearchAndFilter onSearch={props.handleSearchDoctor} />
      <TableContainer component={Paper} sx={tableStyles}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Аватарка</TableCell>
              <TableCell>Фамилия</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Отчество</TableCell>
              <TableCell>Профессия</TableCell>
              <TableCell>
                Действия
                <Tooltip title="Добавить доктора" sx={{ alignItems: "right" }}>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenPopup(null)}
                  >
                    <ControlPointIcon />
                  </IconButton>
                </Tooltip>
                <AddDoctorPopup
                  open={openPopup}
                  handleClose={handleClosePopup}
                  handleAdd={props.handleAddDoctor}
                  handleEdit={props.handleEditDoctor}
                  doctor={editingDoctor}
                  professions={props.professions}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.doctors.map((doctor) => {
              return (
                <TableRow key={doctor.id} hover style={{ cursor: "pointer" }}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={doctor.avatar}
                        alt={`${doctor.firstName} ${doctor.lastName}`}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>{doctor.lastName}</TableCell>
                  <TableCell>{doctor.firstName}</TableCell>
                  <TableCell>{doctor.middleName}</TableCell>
                  <TableCell>{doctor.profession.name}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton onClick={() => handleOpenPopup(doctor)}>
                        <CreateIcon color="warning" />
                      </IconButton>
                      <IconButton
                        onClick={() => props.handleDeleteDoctor(doctor.id)}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                      <IconButton
                        onClick={() => handleVisibilityDetail(doctor.id)}
                      >
                        <VisibilityIcon color="primary" />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListDoctors;
