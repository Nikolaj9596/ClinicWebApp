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
  Icon
} from '@mui/material';

const Sidebar: React.FC = () => {
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
        <Typography variant="h6">Material Dashboard 2</Typography>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
      <List>
        <ListItem button component="a" href="/dashboard">
          <ListItemIcon>
            <Icon sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>dashboard</Icon>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* Repeat ListItem for other navigation links... */}
        <ListItem button component="a" href="/authentication/sign-in">
          <ListItemIcon>
            <Icon sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>login</Icon>
          </ListItemIcon>
          <ListItemText primary="Sign In" />
        </ListItem>
        <ListItem button component="a" href="/authentication/sign-up">
          <ListItemIcon>
            <Icon sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>assignment</Icon>
          </ListItemIcon>
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
