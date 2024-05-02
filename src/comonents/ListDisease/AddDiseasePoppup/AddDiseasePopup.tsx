import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogActions, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './AddDiseasePopup.css'; // Здесь могут быть ваши стили для попапа
import { dialogStyles } from '../../../styles';
import { CategoryDiseasesType, DiseaseType } from '../../../state/disease.type';

type AddDiseasePopupProps = {
  open: boolean;
  handleClose: () => void;
  handleAdd: (disease: DiseaseType) => void;
  handleEdit: (disease: DiseaseType) => void;
  disease: DiseaseType
  categoryDiseases: Array<CategoryDiseasesType>
};

const AddDiseasePopup: React.FC<AddDiseasePopupProps> = (props) => {

  const [newDisease, setNewDisease] = useState<DiseaseType>(props.disease);

  useEffect(() => {
    setNewDisease(props.disease);
  }, [props.disease]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setNewDisease({ ...newDisease, [event.target.name]: event.target.value });
  };

  const onAddClick = () => {
    if (newDisease.id === 0) {
      props.handleAdd(newDisease)
    } else {
      props.handleEdit(newDisease)
    }
    props.handleClose();
  };

  const handleCategoryDiseaseChange = (
    event: SelectChangeEvent<string>
  ) => {
    const categoryDiseaseId = parseInt(event.target.value);
    const categoryDisease = props.categoryDiseases.find((c) => c.id === categoryDiseaseId);

    if (categoryDisease) {
      setNewDisease((prevDisease) => ({
        ...prevDisease,
        category_disease: {
          id: categoryDisease.id,
          name: categoryDisease.name,
        },
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
      <DialogTitle id="form-dialog-title">Добавление заболевание</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Название"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newDisease.name}
        />
        <TextField
          margin="dense"
          id="description"
          name="description"
          label="Описание"
          type="text"
          fullWidth
          onChange={handleChange}
          value={newDisease.description}
        />


        <FormControl fullWidth margin="dense">
          <InputLabel id="category-label">Категория заболевания</InputLabel>
          <Select
            labelId="category-label"
            id="category_diseases"
            value={newDisease.category_disease?.name || ''}
            label="Категория заболевания"
            onChange={handleCategoryDiseaseChange}
          >
            {props.categoryDiseases.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
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

export default AddDiseasePopup;
