import React from "react";
import "./ListClients.css"
import { ListClientsProps } from "../../state/client.type";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

const ListClients: React.FC<ListClientsProps> = (props) => {
  const navigate = useNavigate(); // Хук для навигации
  const handleRowClick = (clientId: number) => {
    navigate(`/clients/${clientId}`);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "calc(100% - 150px)", // Убедитесь, что ширина таблицы учитывает ширину navbar
        marginLeft: "150px", // Отступ слева, равный ширине navbar
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        overflow: "hidden"
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell></TableCell>  */}
            <TableCell>Фамилия</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Отчество</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.clients.map((client) => (
            <TableRow key={client.id} hover style={{ cursor: 'pointer' }}  onClick={() => handleRowClick(client.id)} >
              {/* <TableCell> */}
              {/*   <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
              {/*     <Avatar src={client.avatar} alt={${doctor.firstName} ${doctor.lastName}} /> */}
              {/*     <Box sx={{ ml: 2 }}> */}
              {/*       <Typography variant="button">{client.firstName} {doctor.lastName}</Typography> */}
              {/*       <Typography variant="caption">{client.profession.name}</Typography> */}
              {/*     </Box> */}
              {/*   </Box> */}
              {/* </TableCell> */}
              <TableCell>{client.lastName}</TableCell>
              <TableCell>{client.firstName}</TableCell>
              <TableCell>{client.middleName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListClients; 
