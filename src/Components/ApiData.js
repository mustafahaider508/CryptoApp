import React,{useEffect,useState} from 'react';
import axios from "axios";
function ApiData() {

   const[apidata,setApidata] = useState([{name:"",price:0,date:""}]);
   const[apidata1,setApidata1] = useState([{name:"",price:0,date:""}]);
   const[apidata2,setApidata2] = useState([{name:"",price:0,date:""}]);
    const [coin,setCoin] = useState([]);

    var PostData = async () => {
  console.log('Client',apidata);
 axios.post("/coins",apidata)
.then((res)=>{console.log(res.data)}).then((err)=>{("error "+err)})
 }

 var PostData1 = async () => {
  console.log('Client',apidata1);
 axios.post("/coins",apidata1)
.then((res)=>{console.log(res.data)}).then((err)=>{("error "+err)})
 }

 var PostData2 = async () => {
  console.log('Client',apidata2);
 axios.post("/coins",apidata2)
.then((res)=>{console.log(res.data)}).then((err)=>{("error "+err)})
 }
    useEffect(() => {
            console.log('This will run every second!');
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
         .then((res)=>{setCoin(res.data.filter(x => (x.symbol === "eth") ||(x.symbol === "bnb") || (x.symbol === "matic")).map(i => {return {name:i.name,price:i.current_price,date:i.last_updated}}))});
    setApidata(coin[0]);
    setApidata1(coin[1]);
    setApidata2(coin[2]);
       },[])
        console.log(apidata);

        useEffect(() => {
          const interval = setInterval(() => {
            console.log('This will run every second!');
            PostData();
             PostData1();
             PostData2();
          }, 10000);
          return () => clearInterval(interval);
        
        },[])     
  return (
    <>
  
    
    </>
  )
}

export default ApiData
