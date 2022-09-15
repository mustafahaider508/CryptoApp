import React, { useState,useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const  AppexChart  = () =>{
  const [options,setoption] = useState({
        chart: {id: 'apexchart-example'},
        xaxis: {categories: []}})

    const [series,setseries] = useState([{
        name: 'series-1',
        data: []}])

    let dates = [];
    let pricee = [];
   // DATA CALL FROM API
   const fun =async()=>{
    
    const res= await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365`);
    const data=res.data.prices.map(i=>{
    dates.push(new Date(i[0]).toLocaleDateString());
   pricee.push((i[1])); 
    
    });
   }

//    console.log(numberWithCommas(pricee).toFixed(2));
 
   useEffect(() => {
      
fun();
 setoption({chart: { id: 'apexchart-example' },
    xaxis: {categories: dates,}})

setseries([{ name: 'series-1',data: pricee,}])

//   options.xaxis.categories.length!==0?setIsLoading(true):setIsLoading(false);
},[])
      return (
          <Chart options={options} series={series} type="line" width={800} height={650} />
       )
}
 export default AppexChart