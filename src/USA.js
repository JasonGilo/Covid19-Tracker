import React, { useEffect, useState } from 'react';
import { Doughnut, Radar, Bar, Polar} from 'react-chartjs-2';
import style from './App.css'



function USA() {
  const [confirmed, setConfirmed] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();
  const [cases, setCases] = useState([]);
  const [dates, setDates] = useState([]);

  const data = {
    datasets: [{
      data: [confirmed, deaths, recovered],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }],
    labels: [
      'Confirmed',
      'Deaths',
      'Recovered'
    ],
    
  };

const dataOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 5
    }
  }
}

const dataOptionsDisplay = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display:false,
  }
}

  const dataRadar = {
    labels: ['Confirmed', 'Deaths', 'Recovered'],
    datasets: [
      {
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,.4)',
        pointBackgroundColor: ['#FF6384','#36A2EB','#FFCE56'],
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [confirmed, deaths, recovered],
      }
    ]
  };


  const dataPolar = {
    datasets: [{
      data: [
        confirmed, deaths, recovered
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ],
    }],
    labels: [
      'Confirmed',
      'Deaths',
      'Recovered'
    ]
  };


  useEffect(()=>{
    fetch("https://covid19.mathdro.id/api/countries/USA")
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      console.log(res);
     setConfirmed(res.confirmed.value)
     setRecovered(res.recovered.value)
     setDeaths(res.deaths.value)
    }

    )


    
  }, [])
  
  const dataBar = {

    labels: ['Confirmed','Deaths','Recovered'],
    datasets: [
      {
        backgroundColor: ['#FF6384','#FFCE56','#4BC0C0'],
        borderColor: ['rgba(255, 99, 132,.1)', 'rgba(255, 206, 86,.1)', 'rgba(54, 162, 235,.1)'],
        borderWidth:  10,
        hoverBackgroundColor: ['rgba(255, 99, 132,.5)','rgba(255, 206, 86,.5)','rgba(54, 162, 235,.5)'],
        hoverBorderColor: ['#FF6384','#FFCE56','#4BC0C0'],
        data: [confirmed, deaths, recovered]
      }
    ]
  };


  return (
    <div id="Main-Container">
      <div id="World-Wide-Box">
      <h2>USA - Coronavirus Statistics</h2>
      <div className = "Box-Info-Container">
      <div className = "Box-Info" id="Confirmed">
        <div id = "Confirmed-Border-Top"></div>
        <h3>Confirmed</h3>
        {String(confirmed).replace(/(.)(?=(\d{3})+$)/g,'$1,')}        
        <div id="Line-One"></div>
        <div id="Confirmed-Border-Bottom"></div>
      </div>
      <div className = "Box-Info" id="Deaths">
      <div id = "Deaths-Border-Top"></div>
        <h3>Deaths</h3>
        {String(deaths).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
        <div id="Line-Three"></div>
        <div id="Deaths-Border-Bottom"></div>
      </div>
      <div className = "Box-Info" id="Recovered">
      <div id = "Recovered-Border-Top"></div>
        <h3>Recovered</h3>
        {String(recovered).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
        <div id="Line-Two"></div>
        <div id="Recovered-Border-Bottom"></div>
      </div>
      </div>
      </div>
      <div id="Entire-Data-Visual-Container">
      <h3>Visual Representation of Confirmed, Deaths, Recovered</h3>
      <div id="Data-Visuals-Container">
      <div id="Data-Visuals-Doughnut">
        <Doughnut data={data} options={dataOptions}/>
      </div>
      <div id="Data-Visuals-Doughnut">
        <Radar data={dataRadar} options={dataOptionsDisplay}/>
      </div>
      <div id="Data-Visuals-Doughnut">
        <Polar data={dataPolar} options={dataOptions}/>
      </div>
      </div>
      </div>
      <div id="Bar-Graph-Global">
      <Bar data={dataBar} options={{legend:{display:false}}}/>
      </div>
    </div>
  );
}

export default USA;
