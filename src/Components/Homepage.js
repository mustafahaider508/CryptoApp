import React from 'react';
import {Container,Typography} from "@mui/material"
import Carousel from "./Carousel";
import "./Homepage.css"
import CoinsTable from './CoinsTable';
function Homepage() {
  return (
    <div>
      <div className="banner">
      <Container className="bannerContent">
        <div className="tagline">
          <Typography 
          className='typography1'
            variant="h2"
           
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
 
    
    </div>
    <CoinsTable />
  
    </div>
    
  )
}

export default Homepage
