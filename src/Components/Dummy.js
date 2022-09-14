import React,{useEffect,useState} from 'react';
import axios from "axios";
function Dummy() {


    const [coin,setCoin] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run after 10 seconds!');
         axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
         .then((res)=>{setCoin(res.data.filter(x => (x.symbol === "eth") || (x.symbol ==="bnb") || (x.symbol ==="matic")))});
          }, 10000);
          return () => clearInterval(interval);
        },[])
console.log(coin);
  return (
    <>
   {
       coin.map(i => {
           return(
               <>
               <p>{i.id}</p>
               </>
           )
       })
   }
      
    </>
  )
}

export default Dummy
