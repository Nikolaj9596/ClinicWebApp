import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { calculateAge } from '../../utils';

// Обновленный тип DoctorType с полем avatar
export type DoctorType = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  profession: { id: number; name: string };
  dateBirthday: string;
  dateStartWork: string;
  // avatar: string; // Путь к аватарке
};

type DoctorsTableProps = {
  doctors: DoctorType[];
};

export const DoctorsTable: React.FC<DoctorsTableProps> = ({ doctors }) => {
  const navigate = useNavigate(); // Хук для навигации

  // Обработчик клика по строке таблицы
  const handleRowClick = (doctorId: number) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "calc(100% - 150px)", // Убедитесь, что ширина таблицы учитывает ширину navbar
        marginLeft: "150px", // Отступ слева, равный ширине navbar
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        overflow: "hidden"
      }}
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
          {doctors.map((doctor) => (
            <TableRow key={doctor.id} hover style={{ cursor: 'pointer' }}  onClick={() => handleRowClick(doctor.id)} >
              {/* <TableCell> */}
              {/*   <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
              {/*     <Avatar src={doctor.avatar} alt={${doctor.firstName} ${doctor.lastName}} /> */}
              {/*     <Box sx={{ ml: 2 }}> */}
              {/*       <Typography variant="button">{doctor.firstName} {doctor.lastName}</Typography> */}
              {/*       <Typography variant="caption">{doctor.profession.name}</Typography> */}
              {/*     </Box> */}
              {/*   </Box> */}
              {/* </TableCell> */}
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

export default DoctorsTable;
