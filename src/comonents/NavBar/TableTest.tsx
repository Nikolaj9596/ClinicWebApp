import React from 'react';
import { Paper, Box, Grid, Typography, Avatar, styled } from '@mui/material';

export type ClientType = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  dateBirthday: string;
  address: string;
  avatar: string;
};

interface ClientProfileProps {
  client: ClientType;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 10,
  boxShadow: theme.shadows[3],
  marginLeft: 150, // добавляем отступ слева
}));

const ClientProfilePage: React.FC<ClientProfileProps> = ({ client }) => {
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

export default ClientProfilePage;
