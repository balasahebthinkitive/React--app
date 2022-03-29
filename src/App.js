
import './App.css';
import AnimatedPieHooks from './components/AnimatedPieHooks';
import ChartNew from './components/ChartNew';
import LineChart from './components/LineChart';
import LinechartNew from './components/LinechartNew';
import PeiChart from './components/PeiChart';
import Chart from './components/ResponsiveBar';

function App() {
  return (
    <div className="App">
     <PeiChart />
     <ChartNew />
     <LinechartNew  height={400} width={400}/>
     <LineChart />
     <Chart />
     <hr />
     <AnimatedPieHooks />
    </div>
  );
}

export default App;
