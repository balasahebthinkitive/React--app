import React, {useEffect, useRef, useState} from 'react';

import * as d3 from 'd3';

function PeiChart(props) {
  const [data] = useState([
      {property: 'a', value: 4},
      {property: 'b', value: 3},
      {property: 'c', value: 10},
      {property: 'd', value: 2},
      {property: 'e', value: 8},
  ])


  const svgRef = useRef();

  useEffect(() => {
      // setting up svg container
      const w = 500;
      const h = 500;
      const redius  = w / 2;
      const svg = d3.select(svgRef.current)
         .attr('width', w)
         .attr('height',h)
         .style('overflow', 'visible')
         .style('margin-top', '400px')
      // setting up chart
      const formattedData = d3.pie().value(d => d.value)(data);
      const arcGenerator = d3.arc().innerRadius(0).outerRadius(redius);
      const color = d3.scaleOrdinal().range(d3.schemeSet2);




      // setting up svg data
      svg.selectAll()
        .data(formattedData)
        .join('path')
           .attr('d', arcGenerator)
           .attr('fill', d => color(d.value))
           .style('opecity', 0.7);


      //setting up annotation   
      svg.selectAll()
        .data(formattedData)
        .join('text')
           .text(d => d.data.property)
           .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
           .style('text-anchor', 'middle');
      

  }, [data])
  
    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default PeiChart;