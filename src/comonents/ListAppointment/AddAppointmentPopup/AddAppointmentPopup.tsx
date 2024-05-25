import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogActions, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import './AddAppointmentPopup.css';
import { dialogStyles } from '../../../styles';
import { ClientType } from '../../../state/client.type';
import { AppointmentType } from '../../../state/appointment.type';
import { DoctorType } from '../../../state/doctor.type';

type AddAppointmentPopupProps = {
  open: boolean;
  handleClose: () => void;
  handleAdd: (appointment: AppointmentType) => void;
  handleEdit: (appointment: AppointmentType) => void;
  doctors: Array<DoctorType>
  clients: Array<ClientType>
  appointment: AppointmentType
};

const AddAppointmentPopup: React.FC<AddAppointmentPopupProps> = (props) => {

  const [newAppointment, setNewAppointment] = useState<AppointmentType>(props.appointment);

  useEffect(() => {
    setNewAppointment(props.appointment);
  }, [props.appointment]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setNewAppointment({ ...newAppointment, [event.target.name]: event.target.value });
  };

  const onAddClick = () => {
    if (newAppointment.id === 0) {
      props.handleAdd(newAppointment)
    } else {
      props.handleEdit(newAppointment)
    }
    props.handleClose();
  };


  const handleDoctorChange = (
    event: SelectChangeEvent<string>
  ) => {
    const doctorId: number = parseInt(event.target.value);
    const doctor: DoctorType | null = props.doctors.find((d) => d.id === doctorId) || null;

    if (doctor) {
      setNewAppointment((prevAppointment) => ({
        ...prevAppointment,
        doctor: {
          id: doctor.id,
          lastName: doctor.lastName,
          firstName: doctor.firstName,
          middleName: doctor.middleName,
          profession: doctor.profession,
          avatar: doctor.avatar
        }
      }));
    }
  };

  const handleClientChange = (
    event: SelectChangeEvent<string>
  ) => {
    const clientId: number = parseInt(event.target.value);
    const client: ClientType | null = props.clients.find((c) => c.id === clientId) || null;

    if (client) {
      setNewAppointment((prevAppointment) => ({
        ...prevAppointment,
        client: {
          id: client.id,
          lastName: client.lastName,
          firstName: client.firstName,
          middleName: client.middleName,
          avatar: client.avatar
        }
      }));
    }
  };

 return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      sx={dialogStyles}
    >
      <DialogTitle id="form-dialog-title">Добавление записи на прием</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="startDateAppointment"
          name="startDateAppointment"
          label="Дата начала приема"
          type="datetime-local"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          value={newAppointment.startDateAppointment}
        />
        <TextField
          margin="dense"
          id="endDateAppointment"
          name="endDateAppointment"
          label="Дата окончания приема"
          type="datetime-local"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          value={newAppointment.endDateAppointment}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="doctor-label">Врач</InputLabel>
          <Select
            labelId="doctor-label"
            id="doctor"
            value={newAppointment.doctor?.id.toString() || ''}
            label="Врач"
            onChange={handleDoctorChange}
          >
            {props.doctors.map((doctor) => (
              <MenuItem key={doctor.id} value={doctor.id}>
                {`${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel id="client-label">Пациент</InputLabel>
          <Select
            labelId="client-label"
            id="client"
            value={newAppointment.client?.id.toString() || ''}
            label="Пациент"
            onChange={handleClientChange}
          >
            {props.clients.map((client) => (
              <MenuItem key={client.id} value={client.id}>
                {`${client.lastName} ${client.firstName} ${client.middleName}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} variant="outlined" color="error">
          Отменить
        </Button>
        <Button onClick={onAddClick} variant="outlined" color="success">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAppointmentPopup;
