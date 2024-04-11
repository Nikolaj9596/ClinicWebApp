import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientDetailsPropsType, ClientType } from '../../../state/client.type';
import "./ClientDetails.css"
import { Paper, Box, Grid, Typography, Avatar, styled } from '@mui/material';

// Предполагается, что у вас есть определенный сервис для получения данных о клиенте
// import { fetchClientDetails } from './clientService';

export const ClientDetails: React.FC<ClientDetailsPropsType> = (props) => {
  const { id } = useParams<{ id: string }>(); // используйте useParams для получения id из URL
  const [client, setClient] = useState<ClientType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Функция для загрузки данных о клиенте
    const loadClientDetails = async () => {
      // Передаем id, приведенное к числу, в функцию для получения деталей клиента
      try {
        setLoading(true);
        const data = props.getClientById(Number(id));
        setClient(data);
        setLoading(false);
      } catch (e) {
        setError('Ошибка при загрузке данных о клиенте');
        setLoading(false);
      }
    };

    if (id) {
      loadClientDetails();
    }
  }, [id]);

  if (loading) {
    return <div className="client-details-container"><p>Загрузка...</p></div>;
  }

  if (error) {
    return <div className="client-details-container"><p>Ошибка: {error}</p></div>;
  }

  if (!client) {
    return <div className="client-details-container"><p>Клиент не найден</p></div>;
  }

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 10,
  boxShadow: theme.shadows[3],
  marginLeft: 150, // добавляем отступ слева
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
            Адрес: {client.address}
          </Typography>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default ClientDetails;
