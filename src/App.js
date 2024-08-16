
import './App.css';
import BarCharts from './Components/BarCharts';
import PieChart from './Components/PieChartData';

import LineDataChart from './Components/LineDataChart';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
        <Routes>
          <Route path='/' element={<BarCharts />} />
          <Route path='/pie_chart' element={ <PieChart />} />
           <Route path='/line_chart' element={   <LineDataChart/>} />
        </Routes>
        
      </Router>
     
      {/* <BarCharts />
     
      <PieChart />
      <LineDataChart/> */}
    
    </div>
  );
}

export default App;
