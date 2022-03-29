
import './App.css';

import React, {useEffect, useState} from 'react';
import * as d3 from "d3";

import AnimatedPieHooks from './components/AnimatedPieHooks';
import AnimatedPieSVG from './components/AnimatedPieSVG'
import NewPieClass  from './components/NewPieClass'
import ChartNew from './components/ChartNew';
import LineChart from './components/LineChart';
import LinechartNew from './components/LinechartNew';
import PeiChart from './components/PeiChart';
import Chart from './components/ResponsiveBar';

function App() {

const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );
  return (
    <div className="App">
      
     <PeiChart />
     <ChartNew />
     <LinechartNew  height={400} width={400}/>
     <LineChart />
     <Chart />
     <hr />
      <div>
        <button onClick={changeData}>Transform</button>
      </div>
      <div>
      <span className="label">Animated Pie Hooks (D3 animations)</span>
        <AnimatedPieHooks
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
        </div>
        <div>
        <span className="label">Animated Pie SVG (React Spring)</span>
          <AnimatedPieSVG 
           data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
           />
        </div>
        <div>
        <span className="label">React Class</span>
        <NewPieClass 
           data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
          />

        </div>
    
    </div>
  );
}

export default App;
