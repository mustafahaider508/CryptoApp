import React from 'react'
import {
    AppBar,
    Button,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@mui/material";
 import {  createTheme, makeStyles, ThemeProvider,} from "@mui/material";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
     <AppBar style={{backgroundColor:"#0f2961"}} variant='outlined'  position="static">
        <Container>
          <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
        
            <img style={{width:"200px",padding:2,margin:0}} src="/Screenshot_2022-09-15_at_11.47.20_PM-removebg-preview.png"/>
            <div>
            <NavLink style={{textDecoration:"none"}} to="/"><Button style={{textTransform:"capitalize",color:"white",fontSize:"20px",fontFamily: "Montserrat"}}>Home</Button></NavLink>
            <NavLink style={{textDecoration:"none"}}  to="/display"><Button style={{textTransform:"capitalize",color:"white",fontSize:"20px",fontFamily: "Montserrat"}}>CoinData</Button> </NavLink>
            <NavLink style={{textDecoration:"none"}} to="/graph/bitcoin"><Button style={{textTransform:"capitalize",color:"white",fontSize:"20px",fontFamily: "Montserrat"}}>Graph</Button></NavLink>
          
          </div>
            
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
