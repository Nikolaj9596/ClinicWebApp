import React, { HTMLAttributes, useState } from "react";
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
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { tableStyles } from "../../styles";
import { AppointmentType, ListAppointmentsProps } from "../../state/appointment.type";
import SearchAndFilter from "../Search/Search";
import AddAppointmentPopup from "./AddAppointmentPopup/AddAppointmentPopup";

const ListAppointmentis: React.FC<ListAppointmentsProps> = (props) => {
  const emptyAppointment: AppointmentType = {
    "id": 0,
    "client": {
      "id": 0,
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "avatar": ""
    },
    "doctor": {
      "id": 1,
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "profession": { "id": 1, "name": "" },
      "avatar": ""
    },
    "startDateAppointment": "",
    "endDateAppointment": ""
  }

  const [openPopup, setOpenPopup] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState<AppointmentType>(emptyAppointment);

  const handleOpenPopup = (appointment: AppointmentType | null) => {
    if (appointment !== null) {
      setEditingAppointment(appointment);
    }
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setEditingAppointment(emptyAppointment)
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
    <>

      <SearchAndFilter onSearch={props.handleSearchAppointment} />
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
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenPopup(null)}
                  >
                    <ControlPointIcon />
                  </IconButton>
                </Tooltip>

                <AddAppointmentPopup
                  open={openPopup}
                  handleClose={handleClosePopup}
                  handleAdd={props.handleAddAppointment}
                  handleEdit={props.handleEditAppointment}
                  appointment={editingAppointment}
                  doctors={props.doctors}
                  clients={props.clients}
                />
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
                  {appointment.startDateAppointment}
                </TableCell>
                <TableCell>
                  {appointment.endDateAppointment}
                </TableCell>
                <TableCell align="center">
                  <ActionButtonWrapper>
                    <IconButton onClick={() => handleOpenPopup(appointment)}>
                      <CreateIcon color="warning" />
                    </IconButton>
                    <IconButton
                      onClick={() => props.handleDeleteAppointment(appointment.id)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </ActionButtonWrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListAppointmentis;
