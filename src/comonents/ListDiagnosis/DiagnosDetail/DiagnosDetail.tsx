import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiagnosDetailsPropsType, DiagnosType } from '../../../state/diagnos.type';
import { Box, Grid, Typography, IconButton, styled, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const DiagnosDetails: React.FC<DiagnosDetailsPropsType> = (props) => {
  const { id } = useParams<{ id: string }>(); // используйте useParams для получения id из URL
  const [diagnos, setdiagnos] = useState<DiagnosType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Хук для навигации

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
    const loadDiagnosDetails = async () => {
      try {
        setLoading(true);
        const data = props.getDiagnosById(Number(id));
        setdiagnos(data);
        setLoading(false);
      } catch (e) {
        setError('Ошибка при загрузке данных о клиенте');
        setLoading(false);
      }
    };

    if (id) {
      loadDiagnosDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!diagnos) {
    return <p>Врач не найден</p>;
  }

  const handleClickDelete = (diagnosId: number) => {
    navigate(`/diagnosis/${diagnosId}/delete`);
  };

  const handleClickEdit = (diagnosId: number) => {
    navigate(`/diagnosis/${diagnosId}/edit`);
  };


  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 10, boxShadow: 3, marginLeft: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {diagnos?.name}
          </Typography>
          <Typography variant="body1">
            {diagnos?.description}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" alignItems="center">
            <Typography variant="body2" mr={1}>
              Статус:
            </Typography>
            {diagnos?.status === 'active' ? (
              <CheckCircleOutlineIcon color="success" />
            ) : (
              <RemoveCircleOutlineIcon color="error" />
            )}
            <Typography variant="body2" ml={1}>
              {diagnos?.status}
            </Typography>
          </Box>
          <Typography variant="h6" gutterBottom>
            Пациент
          </Typography>
          <Typography variant="body1">
            {diagnos?.client.firstName} {diagnos?.client.lastName}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Врач
          </Typography>
          <Typography variant="body1">
            {diagnos?.doctor.firstName} {diagnos?.doctor.lastName}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Связанные Заболевания
          </Typography>
          <List>
            {diagnos?.disease.map((disease) => (
              <ListItem key={disease.id}>
                <ListItemText primary={disease.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item xs={12} md={4}>
            <StyledBox>
              <IconButton onClick={() => handleClickEdit(diagnos.id)} aria-label="edit">
                <CreateIcon color="primary" />
              </IconButton>
              <IconButton onClick={() => handleClickDelete(diagnos.id)} aria-label="delete">
                <DeleteIcon color="secondary" />
              </IconButton>
            </StyledBox>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DiagnosDetails;
