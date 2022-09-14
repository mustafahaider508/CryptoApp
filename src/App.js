import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import CoinsTable from './Components/CoinsTable';
import Homepage  from './Components/Homepage';
import Graph from "./Components/Graph";
import  AppexChart from "./Components/Chart";
import Dummy from './Components/Dummy';


function App() {
  return (
    <div className="App">
      <Dummy />

      {/* <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route path="/coinstable"   element={<CoinsTable />} />
        <Route  path="/graph/:id" element={ <Graph/>}  />
      </Routes>
      </BrowserRouter>  */}

   {/* <ApexChart /> */}

      

     {/* <Homepage /> */}
     {/* <CoinsTable /> */}
    </div>
  );
}

export default App;
