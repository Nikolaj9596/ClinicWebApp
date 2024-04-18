import React from "react";
import "./ListClients.css"
import { ListClientsProps } from "../../state/client.type";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';

import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { tableStyles } from "../../styles";
 
const ListClients: React.FC<ListClientsProps> = (props) => {

  const navigate = useNavigate(); // Хук для навигации

  const handleVisibilityDetail = (clientId: number) => {
    navigate(`/clients/${clientId}`);
  };

  const handleDelete = (clientId: number) => {
    console.log(`Deleting doctor with ID ${clientId}`);
  };

  const handleEdit = (clientId: number) => {
    navigate(`/doctors/edit/${clientId}`);
  };

  const handleAddDoctor = () => {
    navigate('/doctors/new'); // Предполагается, что '/doctors/new' ведёт на страницу добавления нового доктора.
  };

  return (
    <TableContainer
      component={Paper}
      sx={tableStyles}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Аватарка</TableCell>
            <TableCell>Фамилия</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Отчество</TableCell>
            <TableCell>
              Действия
              <Tooltip title="Добавить клиента" sx={{ alignItems: 'right' }}>
                <IconButton color="primary" onClick={handleAddDoctor}>
                  <ControlPointIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.clients.map((client) => (
            <TableRow key={client.id} hover style={{ cursor: 'pointer' }}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={client.avatar} alt={`${client.firstName} ${client.lastName}`} />
                </Box>
              </TableCell>
              <TableCell>{client.lastName}</TableCell>
              <TableCell>{client.firstName}</TableCell>
              <TableCell>{client.middleName}</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => handleEdit(client.id)}>
                      <CreateIcon color="warning" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(client.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                    <IconButton onClick={() => handleVisibilityDetail(client.id)}>
                      <VisibilityIcon color="primary" />
                    </IconButton>
                  </Box>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListClients; 
