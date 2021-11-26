import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";


const NavBarMenu = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }} >
            </IconButton>           
          </Toolbar>
        </AppBar>
      </Box>
      <br/>
      
        <Stack spacing={2} direction="row">
          <Link to="/"><Button variant="contained">Inicio</Button></Link>
          <Link to="/addProduct"><Button variant="contained">Add Formulario</Button></Link>
        </Stack>
      </>

   
  );
};

export default NavBarMenu;
