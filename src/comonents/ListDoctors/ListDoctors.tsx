import React from "react";
import "./ListDoctors.css";
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ListDoctorsProps } from "../../state/doctor.type";

const ListDoctors: React.FC<ListDoctorsProps> = (props) => {

  const navigate = useNavigate(); // Хук для навигации

  // Обработчик клика по строке таблицы
  const handleRowClick = (doctorId: number) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <TableContainer
      component={Paper}
      sx={props.tableStyles}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell></TableCell>  */}
            <TableCell>Фамилия</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Отчество</TableCell>
            <TableCell>Профессия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.doctors.map((doctor) => (
            <TableRow key={doctor.id} hover style={{ cursor: 'pointer' }} onClick={() => handleRowClick(doctor.id)} >
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={doctor.avatar} alt={`${doctor.firstName} ${doctor.lastName}`} />
                  {/* <Box sx={{ ml: 2 }}> */}
                  {/*   <Typography variant="button">{doctor.firstName} {doctor.lastName}</Typography> */}
                  {/*   <Typography variant="caption">{doctor.profession.name}</Typography> */}
                  {/* </Box> */}
                </Box>
              </TableCell>
              <TableCell>{doctor.lastName}</TableCell>
              <TableCell>{doctor.firstName}</TableCell>
              <TableCell>{doctor.middleName}</TableCell>
              <TableCell>{doctor.profession.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListDoctors;
