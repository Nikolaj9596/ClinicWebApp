import React from 'react';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from '@mui/material';
import MasksIcon from '@mui/icons-material/Masks';
import GroupsIcon from '@mui/icons-material/Groups';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { listItemStyles } from '../../styles';


const NavBar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{ elevation: 0 }}
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: '#29292C',
          color: 'rgba(255, 255, 255, 0.87)',
          borderRadius: '16px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          padding: '16px',
          margin: '16px'
        }
      }}
    >
      <Box
        sx={{
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '16px',
          paddingBottom: '16px',
          backgroundColor: '#42424a',
          borderRadius: '12px'
        }}
      >
        <Typography variant="h6">CRM Пилюлькин</Typography>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
      <List>
        <ListItem sx={listItemStyles} button component={NavLink} to="/doctors">
          <ListItemIcon>
            <MasksIcon sx={{ color: 'rgba(255, 255, 255, 0.87)' }} />
          </ListItemIcon>
          <ListItemText primary="Врачи" />
        </ListItem>

        <ListItem sx={listItemStyles} button component={NavLink} to="/clients">
          <ListItemIcon>
            <GroupsIcon sx={{ color: 'rgba(255, 255, 255, 0.87)' }} />
          </ListItemIcon>
          <ListItemText primary="Клиенты" />
        </ListItem>


        <ListItem sx={listItemStyles} button component={NavLink} to="/diseases">
          <ListItemIcon>
            <CoronavirusIcon sx={{ color: 'rgba(255, 255, 255, 0.87)' }} />
          </ListItemIcon>
          <ListItemText primary="Заболевания" />
        </ListItem>

        <ListItem sx={listItemStyles} button component={NavLink} to="/diagnosis">
          <ListItemIcon>
            <StickyNote2Icon sx={{ color: 'rgba(255, 255, 255, 0.87)' }} />
          </ListItemIcon>
          <ListItemText primary="Диагнозы" />
        </ListItem>

        <ListItem sx={listItemStyles} button component={NavLink} to="/appointments">
          <MenuBookIcon>
            <StickyNote2Icon sx={{ color: 'rgba(255, 255, 255, 0.87)' }} />
          </MenuBookIcon>
          <ListItemText primary="Записи на прием" sx={{paddingLeft: '30px'}}/>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavBar;
