import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogActions, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import './AddDoctorPopup.css';
import { dialogStyles } from '../../../styles';
import { DoctorType, ProfessionType } from '../../../state/doctor.type';

type AddDoctorPopupProps = {
  open: boolean;
  handleClose: () => void;
  handleAdd: (doctor: DoctorType) => void;
  handleEdit: (doctor: DoctorType) => void;
  doctor: DoctorType
  professions: Array<ProfessionType>
};

const AddDoctorPopup: React.FC<AddDoctorPopupProps> = ({ open, handleClose, handleAdd, handleEdit, doctor, professions }) => {

  const [newDoctor, setNewDoctor] = useState<DoctorType>(doctor);

  useEffect(() => {
    setNewDoctor(doctor);
  }, [doctor]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setNewDoctor({ ...newDoctor, [event.target.name]: event.target.value });
  };

  const onAddClick = () => {
    console.log(newDoctor.id)
    if (newDoctor.id === 0) {
      handleAdd(newDoctor)
    } else {
      handleEdit(newDoctor)
    }
    handleClose();
  };

  const handleProfessionChange = (
    event: SelectChangeEvent<string>
  ) => {
    const professionName = event.target.value;
    const profession = professions.find((prof) => prof.name === professionName);

    if (profession) {
      setNewDoctor((prevDoctor) => ({
        ...prevDoctor,
        profession: {
          id: profession.id,
          name: professionName,
        },
      }));
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      sx={dialogStyles}
    >
      <DialogTitle id="form-dialog-title">Добавление врача</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="lastName"
          name="lastName"
          label="Фамилия"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newDoctor.lastName}
        />
        <TextField
          margin="dense"
          id="firstName"
          name="firstName"
          label="Имя"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newDoctor.firstName}
        />
        <TextField
          margin="dense"
          id="middleName"
          name="middleName"
          label="Отчество"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newDoctor.middleName}
        />
        <TextField
          margin="dense"
          id="dateBirthday"
          name="dateBirthday"
          label="Дата рождения"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          value={newDoctor.dateBirthday}
        />
        <TextField
          margin="dense"
          id="dateStartWork"
          name="dateStartWork"
          label="Дата начала работы"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          value={newDoctor.dateStartWork}
        />
        <TextField
          margin="dense"
          id="avatar"
          name="avatar"
          label="Ссылка на аватар"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newDoctor.avatar}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="profession-label">Профессия</InputLabel>
          <Select
            labelId="profession-label"
            id="profession"
            value={newDoctor.profession?.name || ''}
            label="Профессия"
            onChange={handleProfessionChange}
          >
            {professions.map((profession) => (
              <MenuItem key={profession.id} value={profession.name}>
                {profession.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="error">
          Отменить
        </Button>
        <Button onClick={onAddClick} variant="outlined" color="success">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDoctorPopup;
