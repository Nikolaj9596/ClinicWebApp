import React from "react";
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
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ListDoctorsProps } from "../../state/doctor.type";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { tableStyles } from "../../styles";
const ListDoctors: React.FC<ListDoctorsProps> = (props) => {

  const navigate = useNavigate(); // Хук для навигации

  const handleVisibilityDetail = (doctorId: number) => {
    navigate(`/doctors/${doctorId}`);
  };

  const handleDelete = (doctorId: number) => {
    // Здесь можно реализовать логику удаления
    console.log(`Deleting doctor with ID ${doctorId}`);
  };

  const handleEdit = (doctorId: number) => {
    navigate(`/doctors/edit/${doctorId}`);
  };

  const handleAddDoctor = () => {
    navigate('/doctors/new'); // Предполагается, что '/doctors/new' ведёт на страницу добавления нового доктора.
  };
  return (
    <TableContainer
      component={Paper}
      sx={tableStyles}
    >
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
              <Tooltip title="Добавить доктора" sx={{ alignItems: 'right' }}>
                <IconButton color="primary" onClick={handleAddDoctor}>
                  <ControlPointIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.doctors.map((doctor) => {
            return (
              <TableRow key={doctor.id} hover style={{ cursor: 'pointer' }}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={doctor.avatar} alt={`${doctor.firstName} ${doctor.lastName}`} />
                  </Box>
                </TableCell>
                <TableCell>{doctor.lastName}</TableCell>
                <TableCell>{doctor.firstName}</TableCell>
                <TableCell>{doctor.middleName}</TableCell>
                <TableCell>{doctor.profession.name}</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => handleEdit(doctor.id)}>
                      <CreateIcon color="warning" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(doctor.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                    <IconButton onClick={() => handleVisibilityDetail(doctor.id)}>
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
  );
};

export default ListDoctors;
