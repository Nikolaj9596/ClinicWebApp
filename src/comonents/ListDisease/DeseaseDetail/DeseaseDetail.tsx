import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiseaseDetailsPropsType, DiseaseType } from '../../../state/disease.type';
import { Box, Grid, Typography, IconButton, styled, Paper, Divider } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import AddDiseasePopup from '../AddDiseasePoppup/AddDiseasePopup';

export const DiseaseDetails: React.FC<DiseaseDetailsPropsType> = (props) => {
  const { id } = useParams<{ id: string }>(); // используйте useParams для получения id из URL
  const [disease, setDisease] = useState<DiseaseType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Хук для навигации

  const [openPopup, setOpenPopup] = useState(false);
  const [editingDisease, setEditingDisease] = useState<DiseaseType>({
    id: 0,
    name: "",
    description: "",
    category_disease: { id: 0, name: "" }
  });
  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: 10,
    boxShadow: theme.shadows[3],
    marginLeft: 150,
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: theme.spacing(2),
  }));

  useEffect(() => {
    // Функция для загрузки данных о клиенте
    const loadDiseaseDetails = async () => {
      // Передаем id, приведенное к числу, в функцию для получения деталей клиента
      try {
        setLoading(true);
        const data = props.getDiseaseById(Number(id));
        setDisease(data);
        setLoading(false);
      } catch (e) {
        setError('Ошибка при загрузке данных о клиенте');
        setLoading(false);
      }
    };

    if (id) {
      loadDiseaseDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!disease) {
    return <p>Врач не найден</p>;
  }

  const handleOpenPopup = (disease: DiseaseType | null) => {
    if (disease !== null) {
      setEditingDisease(disease)
    }
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleAdd = (disease: DiseaseType) => {
    console.log(disease)
  };



  return (
    <StyledPaper elevation={3}>

      <AddDiseasePopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleAdd={handleAdd}
        handleEdit={props.handleEditDisease}
        disease={editingDisease}
        categoryDiseases={props.categoryDiseases}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {disease.name}
          </Typography>
          <Divider />
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Категория: {disease.category_disease.name}
          </Typography>
          <Divider />
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Описание
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {disease.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledBox>
            <IconButton onClick={() => handleOpenPopup(disease)} aria-label="edit">
              <CreateIcon color="warning" />
            </IconButton>
            <IconButton onClick={() => props.handleDeleteDisease(disease.id)} aria-label="delete">
              <DeleteIcon color="error" />
            </IconButton>
          </StyledBox>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default DiseaseDetails;
