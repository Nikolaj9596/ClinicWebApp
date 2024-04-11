import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DoctorDetailsPropsType, DoctorType } from '../../../state/doctor.type';
import { Paper, Box, Grid, Typography, Avatar, styled } from '@mui/material';
import { calculateAge } from '../../../utils';


export const DoctorDetails: React.FC<DoctorDetailsPropsType> = (props) => {
  const { id } = useParams<{ id: string }>(); // используйте useParams для получения id из URL
  const [client, setClient] = useState<DoctorType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Функция для загрузки данных о клиенте
    const loadDoctorDetails = async () => {
      // Передаем id, приведенное к числу, в функцию для получения деталей клиента
      try {
        setLoading(true);
        const data = props.getDoctorById(Number(id));
        setClient(data);
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

  if (!client) {
    return <p>Врач не найден</p>;
  }

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 10,
  boxShadow: theme.shadows[3],
  marginLeft: 150,
}));

  const fullName = `${client.lastName} ${client.firstName} ${client.middleName}`;
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
            <Avatar alt={fullName} src={client.avatar} sx={{ width: 128, height: 128 }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {fullName}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Дата рождения: {client.dateBirthday}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Профессия: {client.profession.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Стаж работы: {calculateAge(client.dateStartWork)}
          </Typography>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default DoctorDetails;
