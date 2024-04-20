import React, { HTMLAttributes } from "react";
import "./ListAppointment.css";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { tableStyles } from "../../styles";
import { ListAppointmentsProps } from "../../state/appointment.type";

const ListAppointmentis: React.FC<ListAppointmentsProps> = (props) => {
  const navigate = useNavigate();

  const handleDelete = (appointmentId: number) => {
    // Здесь можно реализовать логику удаления
    console.log(`Deleting appointment with ID ${appointmentId}`);
  };

  const handleEdit = (appointmentId: number) => {
    navigate(`/appointmentis/edit/${appointmentId}`);
  };

  const handleAddAppointment = () => {
    navigate('/appointmentis/new'); // Предполагается, что '/appointments/new' ведёт на страницу добавления нового доктора.
  };

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    marginRight: theme.spacing(2),
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center', // выравниваем элементы по центру
  }));

  const ActionButtonWrapper = styled(Box)(({ theme }) => ({
    '& > :not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  }));

  return (
    <TableContainer
      component={Paper}
      sx={tableStyles}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Пациент</TableCell>
            <TableCell>Врач</TableCell>
            <TableCell>Дата начала</TableCell>
            <TableCell>Дата окончания</TableCell>
            <TableCell>
              Действия
              <Tooltip title="Добавить запись на прием" sx={{ alignItems: 'right' }}>
                <IconButton color="primary" onClick={handleAddAppointment}>
                  <ControlPointIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.appointments.map((appointment) => (
            <TableRow key={appointment.id} hover style={{ cursor: 'pointer' }}>
              <TableCell>
                <StyledBox>
                  <StyledAvatar src={appointment.client.avatar} alt={appointment.client.firstName + ' ' + appointment.client.lastName} />
                  <Typography variant="body1" color="textSecondary">
                    {appointment.client.lastName + ' ' + appointment.client.firstName + ' ' + appointment.client.middleName}
                  </Typography>
                </StyledBox>
              </TableCell>
              <TableCell>
                <StyledBox>
                  <StyledAvatar src={appointment.doctor.avatar} alt={appointment.doctor.firstName + ' ' + appointment.doctor.lastName} />
                  <Typography variant="body1" color="textSecondary">
                    {appointment.doctor.lastName + ' ' + appointment.doctor.firstName + ' ' + appointment.doctor.middleName}
                  </Typography>
                </StyledBox>
              </TableCell>
              <TableCell>
                {appointment.start_date_appointment}
              </TableCell>
              <TableCell>
                {appointment.end_date_appointment}
              </TableCell>
              <TableCell align="center">
                <ActionButtonWrapper>
                  <IconButton onClick={() => handleEdit(appointment.id)}>
                    <CreateIcon color="warning" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(appointment.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </ActionButtonWrapper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListAppointmentis;
