
import './App.css';
import BarGraph from './Charts/Bar';
import DoughnutChart from './Charts/Doughnut';
import PieChart from './Charts/Pie';
import LineChart from './Charts/Line';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import GivePadding from './Components/SpaceComp'
import HomePage from './Pages/Home/Home'

function App() {
  return (
    <div>
       <Router>
        <Navbar />
       
        <Routes>
        <Route path='/' element={<GivePadding childComp={<HomePage/>}/>} />

          {/* <Route path='/bar' element={<GivePadding childComp={<BarGraph/>}/>} /> */}
          <Route path='chartType/Bar' element={<GivePadding childComp={<BarGraph/>}/>}/>
          <Route path='chartType/Doughnut' element={<GivePadding childComp={<DoughnutChart/>}/>}/>
          <Route path='chartType/Line' element={<GivePadding childComp={<LineChart/>}/>}/>
          <Route path='chartType/Pie' element={<GivePadding childComp={<PieChart/>}/>}/>

        </Routes>
        
       </Router>
       
    </div>
  );
}

export default App;
