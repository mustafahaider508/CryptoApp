import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import CoinsTable from './Components/CoinsTable';
import Homepage  from './Components/Homepage';
import Graph from "./Components/Graph";
import ApiData from './Components/ApiData';
import DisplayApiData from './Components/DisplayApiData';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';


function App() {


  return (
    <div className="App">
    

       <BrowserRouter>
       <Header />
      <Routes>
        
        <Route  path="/" element={<Homepage />} />
        <Route path="/coinstable"   element={<CoinsTable />} />
        <Route  path="/graph/:id" element={ <Graph/>}  />
        <Route  path="/apidata" element={<ApiData />}/>
        <Route  path="/display" element={<DisplayApiData />} />
      </Routes>
      </BrowserRouter>  

 
    </div>
  );
}

export default App;
