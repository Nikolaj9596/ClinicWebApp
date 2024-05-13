import React, { useEffect, useState } from "react";
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
import AddClientPopup from "./AddClientPopup/AddClientPopup";
import { ClientType } from "../NavBar/TableTest";
import SearchAndFilter from "../Search/Search";
import { useDispatch } from "react-redux";
import { clientAPI } from "../../api/client.api";
import { getListClientdAC } from "../../state/client-reducer";

const ListClients: React.FC<ListClientsProps> = (props) => {

  const navigate = useNavigate(); // Хук для навигации
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false); // Состояние для управления видимостью попапа
  const [editingClient, setEditingClient] = useState<ClientType>(
    {
      "id": 0,
      "lastName": "",
      "firstName": "",
      "middleName": "",
      "dateBirthday": "",
      "address": "",
      "avatar": ""
    }
  );
  const handleVisibilityDetail = (clientId: number) => {
    navigate(`/clients/${clientId}`);
  };

  const handleOpenPopup = (client: ClientType | null) => {
    if (client !== null) {
      setEditingClient(client)
    }
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };


  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await clientAPI.getListClients();
        dispatch(getListClientdAC(response.data));
      } catch (error) {
        console.error("Error fetching clients", error);
      }
    };
    fetchClients();
  }, [dispatch]);

  return (
    <>
      <SearchAndFilter onSearch={props.handleSearchClient} />
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
                  <IconButton color="primary" onClick={() => handleOpenPopup(null)}>
                    <ControlPointIcon />
                  </IconButton>
                </Tooltip>
                <AddClientPopup
                  open={openPopup}
                  handleClose={handleClosePopup}
                  handleAdd={props.handleAddClient}
                  handleEdit={props.handleEditClient}
                  client={editingClient}
                />
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
                    <IconButton onClick={() => handleOpenPopup(client)}>
                      <CreateIcon color="warning" />
                    </IconButton>
                    <IconButton onClick={() => props.handleDeleteClient(client.id)}>
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
    </>
  );
};

export default ListClients; 
