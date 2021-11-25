import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';


const NavBarMenu = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
            </IconButton>
            <Link to="/addProduct"><Typography variant="h3" component="div" sx={{ flexGrow: 2 }}>Formulario App </Typography></Link>
            <Typography variant="h3" component="div" sx={{ flexGrow: 2 }}>
            <Link  color="inherit" to="/"> Home </Link>
            </Typography>
            <Button color="inherit" >Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBarMenu;
