import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React from "react";
import { useNavigate } from 'react-router-dom'
import styles from './header.module.css';
import logo from "../../img/logo.gif";

function Header() {
  const navigateTo = useNavigate();
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    margin: 0,
    padding: 0,
    alignItems: 'flex-start',
    justifyContent: "flex-start",
    paddingBottom: theme.spacing(2),
    '@media all': {
      maxHeight: 40,
    },
  }));

  return (
    <Box sx={{ flexGrow: 1, justifyItems: "space-between" }}>
      <AppBar position="static" sx={{ backgroundColor: "#49454F" }}>
        <StyledToolbar>
          <img src={logo} alt="Logo Finder Github" className={styles.gif} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end', marginLeft: 2, }}
          >
            <Link
              onClick={() => navigateTo('/')}
              underline="hover"
              target="_blank"
              rel="noopener"
              color="#fff" >
              {'Sobre'}
            </Link>
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default Header;