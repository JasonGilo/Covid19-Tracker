import React, { useEffect, useState } from 'react';
import { Doughnut, Radar, Bar, Polar} from 'react-chartjs-2';
import './App.css'



function Worldwide() {
  const [confirmed, setConfirmed] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [revisedDates, setRevisedDates]  = useState([]);
  const [revisedCases, setRevisedCases]  = useState([]);
  const [dates , setDates] = useState([]);
  const [dateErrorBoolean, setDateErrorBoolean] = useState(false);

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
        label: '# of cases',
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
    labels: [
      'Confirmed',
      'Deaths',
      'Recovered'
    ],
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
        setDates(dateArray);
    }

    )
  }, [])


  useEffect(()=>{
    fetch("https://covid19.mathdro.id/api/daily")
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      var startIndex, endIndex;
      res.find((obj, i)=> {
        if(obj.reportDate===start){
          startIndex = i;
        }
        if(obj.reportDate===end){
          endIndex = i;
        }
      })
      res = res.slice(startIndex, endIndex)

      setRevisedDates(res.map(objDate =>{
        return objDate.reportDate;
      }))
      setRevisedCases(res.map(val => val.deltaConfirmed))

    }

    )
  }, [start, end])

   function startChange(date){
     var startDate = new Date(date.target.value);
     var endDate = new Date(end);
     if(end===undefined){
       endDate = new Date(dates[dates.length-1])
     }

     if(startDate <= endDate){
      setStart(date.target.value);
      setDateErrorBoolean(false);
     }else{
      setDateErrorBoolean(true);
    }
    
   }

   function endChange(date){
    var startDate = new Date(start);
    var endDate = new Date(date.target.value);
    if(start===undefined){
      startDate = new Date(dates[0]);
    }
     if(startDate <= endDate){
      setEnd(date.target.value);
      setDateErrorBoolean(false);
     }else{
       setDateErrorBoolean(true);
     }
   }


   function dateError(){
     return(
       <div style={{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)',
       width:'250px',
       height:'175px',
       backgroundColor:'rgba(0,0,0,.5)',
       borderRadius:'5%',
       }}>
         <div style={{color:'white', padding:'15px', textAlign:'center'}}>
          <h3 style={{fontSize:'42px', marginBottom:'0px', marginTop:'0px',borderBottom:'3px solid white'}}>
            Error
          </h3>
          <p style={{fontSize:'18px', marginBottom:'0px', marginTop:'5px'}}>
            You have entered an invalid date selection. Make sure the start and end dates overlap.
          </p>
          </div>
        </div>
     )
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
      <div id="Bar-Graph-Global" style={{position:'relative'}}>
        {dateErrorBoolean && dateError()}
        <div id="Title-Date-Box">
        <h3>Daily Confirmed Cases</h3>
        <div id="Date-Select-Box">
          <h4>Date Selector</h4>
        <select onChange={startChange}>
          {dates.map((res, i)=>(
           <option value={res}>{res}</option>
          ))}
        </select>
        <span style={{padding:"0 5px"}}>to</span>
        <select onChange={endChange}>
          {dates.slice(0).reverse().map((res, i)=>(
            <option value={res}>{res}</option>
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
