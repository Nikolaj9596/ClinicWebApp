import React, { useState } from "react";
import "./ListDisease.css";
import {
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
import { DiseaseType, ListDiseasesProps } from "../../state/disease.type";
import SearchAndFilter from "../Search/Search";
import AddDiseasePopup from "./AddDiseasePoppup/AddDiseasePopup";

const ListDiseases: React.FC<ListDiseasesProps> = (props) => {
  const navigate = useNavigate();

  const [openPopup, setOpenPopup] = useState(false);
  const [editingDisease, setEditingDisease] = useState<DiseaseType>({
    id: 0,
    name: "",
    description: "",
    category_disease: { id: 0, name: "" }
  });

  const handleVisibilityDetail = (diseaseId: number) => {
    navigate(`/diseases/${diseaseId}`);
  };

  const handleOpenPopup = (disease: DiseaseType | null) => {
    if (disease !== null) {
      setEditingDisease(disease);
    }
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <SearchAndFilter onSearch={props.handleSearchDisease} />
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
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenPopup(null)}
                  >
                    <ControlPointIcon />
                  </IconButton>
                </Tooltip>
                <AddDiseasePopup
                  open={openPopup}
                  handleClose={handleClosePopup}
                  handleAdd={props.handleAddDisease}
                  handleEdit={props.handleEditDisease}
                  disease={editingDisease}
                  categoryDiseases={props.categoryDiseases}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.diseases.map((disease) => {
              return (
                <TableRow key={disease.id} hover style={{ cursor: 'pointer' }}>
                  <TableCell>{disease.name}</TableCell>
                  <TableCell>{disease.category_disease.name}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={() => handleOpenPopup(disease)}>
                        <CreateIcon color="warning" />
                      </IconButton>
                      <IconButton
                        onClick={() => props.handleDeleteDisease(disease.id)}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                      <IconButton
                        onClick={() => handleVisibilityDetail(disease.id)}
                      >
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
    </>
  );
};

export default ListDiseases;
