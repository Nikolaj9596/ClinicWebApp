import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DoctorDetailsPropsType, DoctorType } from '../../../state/doctor.type';
import { Box, Grid, Typography, Avatar, IconButton, styled, Paper } from '@mui/material';
import { calculateAge } from '../../../utils';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export const DoctorDetails: React.FC<DoctorDetailsPropsType> = (props) => {
  const { id } = useParams<{ id: string }>(); // используйте useParams для получения id из URL
  const [doctor, setdoctor] = useState<DoctorType | null>(null);
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
    // Функция для загрузки данных о клиенте
    const loadDoctorDetails = async () => {
      // Передаем id, приведенное к числу, в функцию для получения деталей клиента
      try {
        setLoading(true);
        const data = props.getDoctorById(Number(id));
        setdoctor(data);
        setLoading(false);
      } catch (e) {
        setError('Ошибка при загрузке данных о клиенте');
        setLoading(false);
      }
    };

    if (id) {
      loadDoctorDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!doctor) {
    return <p>Врач не найден</p>;
  }

  const handleClickDelete = (doctorId: number) => {
    navigate(`/doctors/${doctorId}/delete`);
  };

  const handleClickEdit = (doctorId: number) => {
    navigate(`/doctors/${doctorId}/edit`);
  };

  const fullName = `${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`;
  return (
    <StyledPaper elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar alt={fullName} src={doctor.avatar} sx={{ width: 128, height: 128 }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {fullName}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Дата рождения: {doctor.dateBirthday}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Профессия: {doctor.profession.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Стаж работы: {calculateAge(doctor.dateStartWork)}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}> {/* Здесь xs, md, lg - это примерные значения и могут быть изменены в соответствии с вашими нуждами */}
          <StyledBox>
            <IconButton onClick={() => handleClickEdit(doctor.id)} aria-label="edit">
              <CreateIcon color="warning" />
            </IconButton>
            <IconButton onClick={() => handleClickDelete(doctor.id)} aria-label="delete">
              <DeleteIcon color="error" />
            </IconButton>
          </StyledBox>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default DoctorDetails;
