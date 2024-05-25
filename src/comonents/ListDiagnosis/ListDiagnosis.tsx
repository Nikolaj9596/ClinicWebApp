import React, { HTMLAttributes, useState } from "react";
import "./ListDiagnosis.css";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { tableStyles } from "../../styles";
import { DiagnosType, ListDiagnosisProps } from "../../state/diagnos.type";
import SearchAndFilter from "../Search/Search";
import AddDiagnosPopup from "./AddDiagnosPopup/AddDiagnosPopup";

const ListDiagnosis: React.FC<ListDiagnosisProps> = (props) => {
  const navigate = useNavigate();
  const emptyDiagnos: DiagnosType = {
    "id": 0,
    "name": "",
    "description": "",
    "client": {
      "id": 0,
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "avatar": ""
    },
    "doctor": {
      "id": 1,
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "avatar": ""
    },
    "diseases": [
      {
        "id": 1,
        "name": "",
      },
      {
        "id": 2,
        "name": "",
      },
      {
        "id": 3,
        "name": "",
      },
    ],
    "status": "active"
  }
  const [openPopup, setOpenPopup] = useState(false);
  const [editingDiagnos, setEditingDiagnos] = useState<DiagnosType>(emptyDiagnos);

  const handleVisibilityDetail = (diagnosId: number) => {
    navigate(`/diagnosis/${diagnosId}`);
  };

  const handleOpenPopup = (diagnos: DiagnosType | null) => {
    if (diagnos !== null) {
      setEditingDiagnos(diagnos);
    }
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setEditingDiagnos(emptyDiagnos)
  };

  interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    status: 'active' | 'inactive';
  }

  const StatusBadge = styled('span')<StatusBadgeProps>(({ theme, status }) => ({
    display: 'inline-block',
    borderRadius: '15px',
    padding: theme.spacing(0.5, 2),
    backgroundColor: status === 'active' ? '#328BED' : 'red',
    color: theme.palette.getContrastText(status === 'active' ? '#328BED' : 'red'),
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
  }));

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    marginRight: theme.spacing(2),
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center', // выравниваем элементы по центру
  }));

  const ActionButtonWrapper = styled(Box)(({ theme }) => ({
    '& > :not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  }));

  return (
    <>

      <SearchAndFilter onSearch={props.handleSearchDiagnos} />
      <TableContainer
        component={Paper}
        sx={tableStyles}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Диагнос</TableCell>
              <TableCell>Пациент</TableCell>
              <TableCell>Врач</TableCell>
              <TableCell>Статус</TableCell>
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
                <AddDiagnosPopup
                  open={openPopup}
                  handleClose={handleClosePopup}
                  handleAdd={props.handleAddDiagnos}
                  handleEdit={props.handleEditDiagnos}
                  diagnos={editingDiagnos}
                  doctors={props.doctors}
                  clients={props.clients}
                  diseases={props.diseases}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.diagnosis.map((diagnos) => (
              <TableRow key={diagnos.id} hover style={{ cursor: 'pointer' }}>
                <TableCell>
                  {diagnos.name}
                </TableCell>
                <TableCell>
                  <StyledBox>
                    <StyledAvatar src={diagnos.client.avatar} alt={diagnos.client.firstName + ' ' + diagnos.client.lastName} />
                    <Typography variant="body1" color="textSecondary">
                      {diagnos.client.lastName + ' ' + diagnos.client.firstName + ' ' + diagnos.client.middleName}
                    </Typography>
                  </StyledBox>
                </TableCell>
                <TableCell>
                  <StyledBox>
                    <StyledAvatar src={diagnos.doctor.avatar} alt={diagnos.doctor.firstName + ' ' + diagnos.doctor.lastName} />
                    <Typography variant="body1" color="textSecondary">
                      {diagnos.doctor.lastName + ' ' + diagnos.doctor.firstName + ' ' + diagnos.doctor.middleName}
                    </Typography>
                  </StyledBox>
                </TableCell>
                <TableCell>
                  <StatusBadge status={diagnos.status}>
                    {diagnos.status}
                  </StatusBadge>
                </TableCell>
                <TableCell align="center">
                  <ActionButtonWrapper>
                    <IconButton onClick={() => handleOpenPopup(diagnos)}>
                      <CreateIcon color="warning" />
                    </IconButton>
                    <IconButton
                      onClick={() => props.handleDeleteDiagnos(diagnos.id)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                    <IconButton
                      onClick={() => handleVisibilityDetail(diagnos.id)}
                    >
                      <VisibilityIcon color="primary" />
                    </IconButton>
                  </ActionButtonWrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListDiagnosis;
