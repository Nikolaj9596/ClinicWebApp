import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ClientDetailsPropsType, ClientType } from '../../../state/client.type';
import "./ClientDetails.css"
import { Box, Grid, Typography, Avatar, IconButton, styled, Paper } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
// import { StyledBox, StyledPaper } from '../../../utils';

export const ClientDetails: React.FC<ClientDetailsPropsType> = (props) => {
  const { id } = useParams<{ id: string }>(); // используйте useParams для получения id из URL
  const [client, setClient] = useState<ClientType | null>(null);
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

  const handleClickDelete = (clientId: number) => {
    console.log(`Deleting client with ID ${clientId}`);
  };

  const handleClickEdit = (clientId: number) => {
    navigate(`/clients/edit/${clientId}`);
  };
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
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={2}> {/* Здесь xs, md, lg - это примерные значения и могут быть изменены в соответствии с вашими нуждами */}
          <StyledBox>
            <IconButton onClick={() => handleClickEdit(client.id)} aria-label="edit">
              <CreateIcon color="warning" />
            </IconButton>
            <IconButton onClick={() => handleClickDelete(client.id)} aria-label="delete">
              <DeleteIcon color="error" />
            </IconButton>
          </StyledBox>
        </Grid>

      </Grid>
    </StyledPaper>
  );
};

export default ClientDetails;
