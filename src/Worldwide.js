import React, { useEffect, useState } from 'react';
import { Doughnut, Radar, Bar, Polar} from 'react-chartjs-2';
import './App.css'



function Worldwide() {
  const [confirmed, setConfirmed] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const [revisedDates, setRevisedDates]  = useState([]);
  const [revisedCases, setRevisedCases]  = useState([]);

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
        pointBackgroundColor: ['#FF6384','#FFCE56','#4BC0C0'],
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
  const dataBar = {

    labels: revisedDates,
    datasets: [
      {
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth:  10,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: revisedCases
      }
    ]
  };

  
  useEffect(()=>{
    fetch("https://covid19.mathdro.id/api")
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      console.log(res)
      setConfirmed(res.confirmed.value);
      setRecovered(res.recovered.value);
      setDeaths(res.deaths.value);
    })

    fetch("https://covid19.mathdro.id/api/daily")
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      console.log(res);
      let dateArray = res.map(val => val.reportDate);
        setRevisedDates(dateArray)
        setRevisedCases(res.map(val => val.deltaConfirmed))
    }

    )
  }, [])

  useEffect(()=>{
    //console.log(" start:" +start + " end:" + end);
    let tempArray;
    let tempArray2;
    if(start==''){
      tempArray = [...revisedDates].splice(0,end);
      tempArray2 = [...revisedCases].splice(0,end);
    }else if(end==''){
      tempArray = [...revisedDates].splice(start-1);
      tempArray2 = [...revisedCases].splice(start-1);
    }else{
      tempArray = [...revisedDates].splice(start-1).splice(0,(end-start+1));
      tempArray2 = [...revisedCases].splice(start-1).splice(0,(end-start+1));
    }

    setRevisedDates(tempArray);
    setRevisedCases(tempArray2);
  },[start, end])
  
  function startChange(date){
    setStart([...revisedDates].indexOf(date.target.value)+1);
  }

  function endChange(date){
    setEnd([...revisedDates].indexOf(date.target.value)+1);
  }

  return (
    <div id="Main-Container">
      <div id="World-Wide-Box">
      <h2>World Wide - Coronavirus Statistics</h2>
      <div className = "Box-Info-Container">
      <div className = "Box-Info" id="Confirmed">
        <div id = "Confirmed-Border-Top"></div>
        <h3>Confirmed</h3>
        <div>
        {String(confirmed).replace(/(.)(?=(\d{3})+$)/g,'$1,')}     
        </div>   
        <div id="Line-One"></div>
        <div id="Confirmed-Border-Bottom"></div>
      </div>
      <div className = "Box-Info" id="Deaths">
      <div id = "Deaths-Border-Top"></div>
        <h3>Deaths</h3>
        <div>
        {String(recovered).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
        </div>
        <div id="Line-Three"></div>
        <div id="Deaths-Border-Bottom"></div>
      </div>
      <div className = "Box-Info" id="Recovered">
      <div id = "Recovered-Border-Top"></div>
        <h3>Recovered</h3>
        <div>
        {String(deaths).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
        </div>
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
        <div id="Title-Date-Box">
        <h3>Daily Confirmed Cases</h3>
        <div id="Date-Select-Box">
          <h4>Date Selector</h4>
        <select onChange={startChange}>
          {revisedDates.map((res, i)=>(
            i===0 ? <option selected value={res}>{res}</option> : <option value={res}>{res}</option>
          ))}
        </select>
        <span style={{padding:"0 5px"}}>to</span>
        <select onChange={endChange}>
          {revisedDates.map((res, i)=>(
            i===(revisedDates.length-1) ? <option selected value={res}>{res}</option> : <option value={res}>{res}</option>
          ))}
        </select>
        </div>
        </div>
      <Bar data={dataBar} options={{legend:{display:false}}}/>
      </div>
    </div>
  );
}

export default Worldwide;
