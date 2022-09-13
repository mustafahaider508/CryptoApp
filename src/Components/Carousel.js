import React, { useEffect, useState }  from 'react';
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { styled } from '@mui/material/styles';

const  Carousel1 = styled('div')(({ theme }) => ({
        paddingTop:"150px",
        height: "50%",
        display: "flex",
        alignItems: "center",
     
  }));
  const  Root = styled('div')(({ theme }) => ({
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      cursor: "pointer",
      color: "white",
 
}));
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

function Carousel() {

    const [trending, setTrending] = useState([]);

    // DATA CALL FROM API
      useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d")
        .then((res)=>{setTrending(res.data)});
        },[])

        // console.log(trending);

        
    // MAP THE IMAGES AND PRICE FOR SLIDER BANNER FROM API
        const items = trending.map(i => {
            let profit = i?.price_change_percentage_24h >= 0;
            return (
               <Root>
                <div>
                <img src={i.image} alt="image" height="80"
          style={{ marginBottom: 10 }} />
          <p>
          {i.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
              alignItems:"center"
            }}
          >
            {profit && "+"}
            {i.price_change_percentage_24h?.toFixed(2)}%
          </span>
         
          </p>  
          <p style={{ fontSize: 22, fontWeight: 500 ,alignItems:"center"}}>
          USD {numberWithCommas(i.current_price.toFixed(2))}
        </p>    
          </div>
          </Root>
            )
        })

        const responsive = {
            0: {
              items: 2,
            },
            512: {
              items: 4,
            },
          };
        
  
  return (
    <>

    <Carousel1>
    <AliceCarousel className="carousel"
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </Carousel1>
    </>
  )
  
    }


export default Carousel
