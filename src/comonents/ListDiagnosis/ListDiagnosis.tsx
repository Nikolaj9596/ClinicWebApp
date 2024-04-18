import React, { HTMLAttributes } from "react";
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
import { ListDiagnosisProps } from "../../state/diagnos.type";

const ListDiagnosis: React.FC<ListDiagnosisProps> = (props) => {
  const navigate = useNavigate();

  const handleVisibilityDetail = (diagnosId: number) => {
    navigate(`/diagnosis/${diagnosId}`);
  };

  const handleDelete = (diagnosId: number) => {
    // Здесь можно реализовать логику удаления
    console.log(`Deleting diagnos with ID ${diagnosId}`);
  };

  const handleEdit = (diagnosId: number) => {
    navigate(`/diagnosis/edit/${diagnosId}`);
  };

  const handleAddDiagnos = () => {
    navigate('/diagnosis/new'); // Предполагается, что '/diagnoss/new' ведёт на страницу добавления нового доктора.
  };

  interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    status: 'active' | 'inactive';
    // theme: Theme | null; 
    // sx?: SxProps<Theme>;
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
                <IconButton color="primary" onClick={handleAddDiagnos}>
                  <ControlPointIcon />
                </IconButton>
              </Tooltip>
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
                  <IconButton onClick={() => handleEdit(diagnos.id)}>
                    <CreateIcon color="warning" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(diagnos.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                  <IconButton onClick={() => handleVisibilityDetail(diagnos.id)}>
                    <VisibilityIcon color="primary" />
                  </IconButton>
                </ActionButtonWrapper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListDiagnosis;
