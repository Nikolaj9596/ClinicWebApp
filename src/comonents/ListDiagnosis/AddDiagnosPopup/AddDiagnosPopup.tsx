import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogActions, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import './AddDiagnosPopup.css';
import { dialogStyles } from '../../../styles';
import { ClientType } from '../../../state/client.type';
import { DiagnosType } from '../../../state/diagnos.type';
import { DoctorType } from '../../../state/doctor.type';
import { DiseaseType } from '../../../state/disease.type';

type AddDiagnosPopupProps = {
  open: boolean;
  handleClose: () => void;
  handleAdd: (diagnos: DiagnosType) => void;
  handleEdit: (diagnos: DiagnosType) => void;
  doctors: Array<DoctorType>
  clients: Array<ClientType>
  diseases: Array<DiseaseType>
  diagnos: DiagnosType
};

const AddDiagnosPopup: React.FC<AddDiagnosPopupProps> = (props) => {

  const [newDiagnos, setNewDiagnos] = useState<DiagnosType>(props.diagnos);
  const [selectedDiseases, setSelectedDiseases] = useState<number[]>(props.diagnos.diseases.map(d => d.id));

  useEffect(() => {
    setNewDiagnos(props.diagnos);
  }, [props.diagnos]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setNewDiagnos({ ...newDiagnos, [event.target.name]: event.target.value });
  };

  const onAddClick = () => {
   const newDiagnosWithDiseases = {
      ...newDiagnos,
      diseases: props.diseases.filter(disease =>
        selectedDiseases.includes(disease.id)
      )
    };
    if (newDiagnosWithDiseases.id === 0) {
      props.handleAdd(newDiagnosWithDiseases)
    } else {
      props.handleEdit(newDiagnosWithDiseases)
    }
    props.handleClose();
  };


  const handleDoctorChange = (
    event: SelectChangeEvent<string>
  ) => {
    const doctorId: number = parseInt(event.target.value);
    const doctor: DoctorType | null = props.doctors.find((d) => d.id === doctorId) || null;

    if (doctor) {
      setNewDiagnos((prevDiagnos) => ({
        ...prevDiagnos,
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
      setNewDiagnos((prevDiagnos) => ({
        ...prevDiagnos,
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

  const handleStatusChange = (event: SelectChangeEvent) => {
    setNewDiagnos({ ...newDiagnos, status: event.target.value as 'active' | 'inactive' });
  };

  const handleDiseaseChange = (
    event: SelectChangeEvent<number[]>
  ) => {
    const value = event.target.value;
    setSelectedDiseases(
      typeof value === 'string' ? value.split(',').map((id) => parseInt(id)) : value
    );
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      sx={dialogStyles}
    >
      <DialogTitle id="form-dialog-title">Добавление врача</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Диагнос"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newDiagnos.name}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="status-label">Статус</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            name="status"
            value={newDiagnos.status}
            label="Статус"
            onChange={handleStatusChange}
          >
            <MenuItem value="active">активен</MenuItem>
            <MenuItem value="inactive">неактивен</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="dense">
          <InputLabel id="doctor-label">Врач</InputLabel>
          <Select
            labelId="doctor-label"
            id="doctor"
            value={newDiagnos.doctor?.id.toString() || ''}
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
            value={newDiagnos.client?.id.toString() || ''}
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
        <FormControl fullWidth margin="dense">
          <InputLabel id="diseases-label">Заболевания</InputLabel>
          <Select
            labelId="diseases-label"
            id="diseases"
            multiple
            value={selectedDiseases}
            onChange={handleDiseaseChange}
            renderValue={(selected) =>
              props.diseases
                .filter((disease) => selected.includes(disease.id))
                .map((disease) => disease.name)
                .join(', ')
            }
          >
            {props.diseases.map((disease) => (
              <MenuItem key={disease.id} value={disease.id}>
                {disease.name}
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

export default AddDiagnosPopup;
