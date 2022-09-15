import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import CoinsTable from './Components/CoinsTable';
import Homepage  from './Components/Homepage';
import Graph from "./Components/Graph";
import  AppexChart from "./Components/Chart";
import Dummy from './Components/ApiData';
import ApiData from './Components/ApiData';


function App() {
  return (
    <div className="App">
    

       <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route path="/coinstable"   element={<CoinsTable />} />
        <Route  path="/graph/:id" element={ <Graph/>}  />
        <Route  path="/apidata" element={<ApiData />}/>
      </Routes>
      </BrowserRouter>  

 
    </div>
  );
}

export default App;
