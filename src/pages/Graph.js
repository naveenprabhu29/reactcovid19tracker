import React from 'react';
import Foot from '../foot';
import ReactApexChart from 'react-apexcharts';
import '../App.css';

const Graph=()=>{
   const series= [{
        name: 'Cases',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Recovered',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
      , {
        name: 'Deaths',
        data: [11, 32, 45, 32, 34, 59, 91]
      }
    
    ];
     const options= {
        chart: {
          height: 350,
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["1/22/20","2/1/20",
          "2/15/20","3/1/20",
          "3/15/20","4/1/20",
          "4/15/20","5/1/20","5/7/20"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
      };
    
    
    

    return(
        <div>
            <br/>
            <h2 style={{textAlign:"center"}}>Global Graph</h2>
            <br/> <div className='for-graph'> <ReactApexChart options={options} series={series} type="line" height={350} />
            </div>
        </div>
    )}

export default Graph;