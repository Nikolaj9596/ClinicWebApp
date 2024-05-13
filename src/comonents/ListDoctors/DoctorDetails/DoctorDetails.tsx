import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DoctorDetailsPropsType, DoctorType } from '../../../state/doctor.type';
import { Box, Grid, Typography, Avatar, IconButton, styled, Paper } from '@mui/material';
import { calculateAge } from '../../../utils';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import AddDoctorPopup from '../AddDoctorPopup/AddDoctorPopup';
import { professionAPI } from '../../../api/profession.api';
import { getListProfessiondAC } from '../../../state/profession-reducer';
import { useDispatch } from 'react-redux';

export const DoctorDetails: React.FC<DoctorDetailsPropsType> = (props) => {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<DoctorType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();
  const [editingDoctor, setEditingDoctor] = useState<DoctorType>(
    {
      "id": 0,
      "lastName": "",
      "firstName": "",
      "middleName": "",
      "dateBirthday": "",
      "dateStartWork": "",
      "profession": { "id": 0, "name": "" },
      "avatar": ""
    }
  );

  useEffect(() => {
    const fetchProfessions = async () => {
      try {
        const response = await professionAPI.getListProfessions();
        dispatch(getListProfessiondAC(response.data));
      } catch (error) {
        console.error("Error fetching professions", error);
      }
    };
    fetchProfessions();
  }, [dispatch]);

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
    const loadDoctorDetails = async () => {
      try {
        setLoading(true);
        const data = props.getDoctorById(Number(id));
        setDoctor(data);
        setLoading(false);
      } catch (e) {
        setError('Ошибка при загрузке данных о клиенте');
        setLoading(false);
      }
    };

    if (id) {
      loadDoctorDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!doctor) {
    return <p>Врач не найден</p>;
  }


  const handleOpenPopup = (doctor: DoctorType | null) => {
    if (doctor !== null) {
      setEditingDoctor(doctor)
    }
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleAdd = (doctor: DoctorType) => {
    console.log("Заглушка")
  };

  const fullName = `${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`;
  return (
    <StyledPaper elevation={3}>

      <AddDoctorPopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleAdd={handleAdd}
        handleEdit={props.handleEditDoctor}
        doctor={editingDoctor}
        professions={props.professions}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar alt={fullName} src={doctor.avatar} sx={{ width: 128, height: 128 }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {fullName}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Дата рождения: {doctor.dateBirthday}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Профессия: {doctor.profession.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Стаж работы: {calculateAge(doctor.dateStartWork)}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}> {/* Здесь xs, md, lg - это примерные значения и могут быть изменены в соответствии с вашими нуждами */}
          <StyledBox>
            <IconButton onClick={() => handleOpenPopup(doctor)} aria-label="edit">
              <CreateIcon color="warning" />
            </IconButton>
            <IconButton onClick={() => props.handleDeleteDoctor(doctor.id)} aria-label="delete">
              <DeleteIcon color="error" />
            </IconButton>
          </StyledBox>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default DoctorDetails;
