import React,{useEffect,useState} from 'react';
import axios from "axios";
import {
    Container,
    TableCell,
    Typography,
    TableBody,
    TableRow,
    TableHead,
    TableContainer,
    Table,
    Paper,
  } from "@mui/material";
  import { Pagination } from '@mui/material';

  export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

function DisplayApiData() {

    const[coindata,setCoindata] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    useEffect(() => {
        axios.get("https://crypto0.herokuapp.com/getcoins").then((res)=>{setCoindata(res.data)});
      },[]) 
      console.log(coindata);

      

  return (
    <div>

      
                    <Container>
        <Typography
          variant="h4"
          style={{textAlign:"center", margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Coins Data by Api
        </Typography>
        </Container>

        <Container maxWidth="lg">
        <TableContainer component={Paper}>

        <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "blue" }}>
                <TableRow>
                  {["Name", "Price",  "Date"].map((head) => (
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Name" ? "" : "left"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              
          
              <TableBody> 
              {
            coindata.slice(9).map(i => {
                return(
                    <>        
                      <TableRow
                        className=""
                        key="name">
                        <TableCell component="th" scope="row"
                          
                        >{i.tokenname}</TableCell>

                       <TableCell >
                       
                          {`$ ${numberWithCommas(i.price.toFixed(2))}`}
                        </TableCell>

                        <TableCell >
                          {new Date(i.date).toLocaleDateString()}
                          {/* {`USD ${numberWithCommas(row.current_price.toFixed(2))}`} */}
                        </TableCell>
                      

                        </TableRow>
                        </>
                )
            })}
                        </TableBody>
              </Table>
        </TableContainer>
       <Pagination
          count={(coindata.length/6)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
       
         
        /> 
        </Container>
                    
                 
      
    </div>
  )
}

export default DisplayApiData
