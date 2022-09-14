import React,{useEffect,useState} from 'react';
import axios from "axios";
function Dummy() {

   const[apidata,setApidata] = useState([]);
    const [coin,setCoin] = useState([]);


    useEffect(() => {
         axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
         .then((res)=>{setCoin(res.data.filter(x => (x.symbol === "eth") ||(x.symbol === "bnb") || (x.symbol === "matic")).map(i => {return  i.last_updated}))});
    
 console.log(coin)

        },[])

// useEffect(() => {
//   const data =  coin.map(i => {return i.name })
//   setApidata(data);


// },[])
  
// console.log(apidata);



  return (
    <>
  
    {coin.map(i => {
           return(
               <>
               <p>{i.name}</p>
               <p>{i.last_updated}</p>
               <p>{i.current_price}</p>
          

               </>
           )
       })
      }
      
    </>
  )
}

export default Dummy
