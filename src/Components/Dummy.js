import React,{useEffect,useState} from 'react';
import axios from "axios";
function Dummy() {




   const[apidata,setApidata] = useState([{name:""}]);
    const [coin,setCoin] = useState([]);



    var PostData = async () => {
 
      

console.log('Client',coin[0]);


axios.post("/coins",coin[0])
.then((res)=>{console.log(res.data)}).then((err)=>{("error "+err)})

alert("Product Added Successfully");



      

    
    }


    useEffect(() => {
         axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
         .then((res)=>{setCoin(res.data.filter(x => (x.symbol === "eth") ||(x.symbol === "bnb") || (x.symbol === "matic")).map(i => {return i.name}))});
    

    setApidata({name:coin[0]});
        },[])
        console.log(apidata)


  
console.log(apidata);



  return (
    <>
  
    <button onClick={PostData}>click Me</button>
      
    </>
  )
}

export default Dummy
