import React, { useState ,useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"; 
import Grid from "@mui/material/Grid";
import { Container, Typography } from '@mui/material';
import AppexChart from './Chart';
import { styled } from '@mui/material/styles';

const  Heading = styled('div')(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",
  textAlign:"center",


}));

const  Containerr = styled('div')(({ theme }) => ({
  marginTop:"30px",
  alignItems:"center",


}));
const  Image = styled('div')(({ theme }) => ({
 textAlign:"center",


}));


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function Graph() {
    const [histroicalData,setHistroicalData] = useState([]);
    const proid = useParams();

   // DATA CALL FROM API
   useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((res)=>{setHistroicalData(res.data.filter(x => x.id === proid.id))});
    },[])

    console.log(histroicalData);
  return (
    <>
    <Containerr>
    <Container maxWidth="xl" >

    <Grid container>
     
    {
      histroicalData.map(i => {
        return(
          <>
          
            <Grid item xs={12} md={6} lg={4}>
              <Image>  <img src={i.image} alt="image" /></Image>
            
            <Heading><Typography variant="h3" >{i.name}</Typography></Heading>  
              <div className="marketData">
          <span style={{ display: "flex",textAlign:"center",alignItems:"center",justifyContent:"center" }}>
         <Heading><Typography style={{fontWeight:"600"}} variant="h5" >Rank:</Typography></Heading>   
            &nbsp; &nbsp;
            <Heading><Typography style={{fontWeight:"600"}}  variant="h6">{numberWithCommas(i.market_cap_rank)} </Typography></Heading>
            
          </span>

          <span style={{ display: "flex",textAlign:"center",alignItems:"center",justifyContent:"center" }}>
            <Heading><Typography style={{fontWeight:"600"}}  variant="h5" >
              Current Price:
            </Typography></Heading>
            
            &nbsp; &nbsp;
            <Heading>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              USD{" "}
              {numberWithCommas(
                i.current_price
              )}
            </Typography>
            </Heading>
            
          </span>
          <span style={{ display: "flex",textAlign:"center",alignItems:"center",justifyContent:"center" }}>
            <Typography style={{fontWeight:"600"}}  variant="h5" >
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              USD{" "}
              {numberWithCommas(
                i.market_cap
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
            </Grid>
           <Grid item xs={12} md={6} lg={8}> <AppexChart /></Grid>
          </>
        )
      })

    }
       </Grid>
      </Container>
      </Containerr>
    </>
  )
}

export default Graph
