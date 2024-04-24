import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogActions } from '@mui/material';
import './AddClientPopup.css'; // Здесь могут быть ваши стили для попапа
import { ClientType } from '../../NavBar/TableTest';
import { dialogStyles } from '../../../styles';

type AddClientPopupProps = {
  open: boolean;
  handleClose: () => void;
  handleAdd: (client: ClientType) => void;
  handleEdit: (client: ClientType) => void;
  client: ClientType
};

const AddClientPopup: React.FC<AddClientPopupProps> = ({ open, handleClose, handleAdd, handleEdit, client }) => {

  const [newClient, setNewClient] = useState<ClientType>(client);

  useEffect(() => {
    setNewClient(client);
  }, [client]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setNewClient({ ...newClient, [event.target.name]: event.target.value });
  };

  const onAddClick = () => {
    console.log(newClient.id)
    if (newClient.id === 0) {
      handleAdd(newClient)
    } else {
      handleEdit(newClient)
    }
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      sx={dialogStyles}
    >
      <DialogTitle id="form-dialog-title">Добавление клиента</DialogTitle>
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
          value={newClient.lastName}
        />
        <TextField
          margin="dense"
          id="firstName"
          name="firstName"
          label="Имя"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newClient.firstName}
        />
        <TextField
          margin="dense"
          id="middleName"
          name="middleName"
          label="Отчество"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newClient.middleName}
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
          value={newClient.dateBirthday}
        />
        <TextField
          margin="dense"
          id="address"
          name="address"
          label="Адрес"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newClient.address}
        />
        <TextField
          margin="dense"
          id="avatar"
          name="avatar"
          label="Ссылка на аватар"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newClient.avatar}
        />
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

export default AddClientPopup;
