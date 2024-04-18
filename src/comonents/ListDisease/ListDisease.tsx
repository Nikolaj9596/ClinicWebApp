import React from "react";
import "./ListDisease.css";
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
import { useNavigate } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { tableStyles } from "../../styles";
import { ListDiseasesProps } from "../../state/disease.type";

const ListDiseases: React.FC<ListDiseasesProps> = (props) => {
  const navigate = useNavigate(); 

  const handleVisibilityDetail = (diseaseId: number) => {
    navigate(`/diseases/${diseaseId}`);
  };

  const handleDelete = (diseaseId: number) => {
    // Здесь можно реализовать логику удаления
    console.log(`Deleting disease with ID ${diseaseId}`);
  };

  const handleEdit = (diseaseId: number) => {
    navigate(`/diseases/edit/${diseaseId}`);
  };

  const handleAddDisease = () => {
    navigate('/diseases/new'); // Предполагается, что '/diseases/new' ведёт на страницу добавления нового доктора.
  };

  return (
    <TableContainer
      component={Paper}
      sx={tableStyles}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название заболевания</TableCell>
            <TableCell>Категория заболевания</TableCell>
            <TableCell>
              Действия
              <Tooltip title="Добавить доктора" sx={{ alignItems: 'right' }}>
                <IconButton color="primary" onClick={handleAddDisease}>
                  <ControlPointIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.diseases.map((disease) => {
            return (
              <TableRow key={disease.id} hover style={{ cursor: 'pointer' }}>
                <TableCell>{disease.name}</TableCell>
                <TableCell>{disease.category_disease}</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => handleEdit(disease.id)}>
                      <CreateIcon color="warning" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(disease.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                    <IconButton onClick={() => handleVisibilityDetail(disease.id)}>
                      <VisibilityIcon color="primary" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListDiseases;
