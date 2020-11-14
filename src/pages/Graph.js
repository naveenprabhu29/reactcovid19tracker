import React , {useEffect , useState} from 'react';
import axios from './axios';

import '../App.css';
import LineGraph from './LineGraph';
import { BeatLoader } from 'react-spinners';
import CovidSum from './CovidSum';




 const Graph =()=>{
 
      const [totalConfirmed,setTotalConfirmed]=useState(0);
      const [totalRecovered,setTotalRecovered]=useState(0);
      const [totalDeaths,setTotalDeaths]=useState(0);             
      const [newConfirmed,setNewConfirmed]=useState(0);             
      const [newRecovered,setNewRecovered]=useState(0);             
      const [newDeaths,setNewDeaths]=useState(0);             
      const [covidSummary,setCovidSummary]=useState({}); 
      const [days,setDays]=useState(7);
      const [country,setCountry]=useState('');
      const [loading,setLoading]=useState(true);
      const [label,setLabel]=useState([]);
      const [coronaCount,setCoronaCount]=useState([]);

   useEffect(() => {
    axios.get('/summary').then(res=>{
     setTotalConfirmed(res.data.Global.TotalConfirmed);
     setTotalRecovered(res.data.Global.TotalRecovered);
     setTotalDeaths(res.data.Global.TotalDeaths);
     setNewConfirmed(res.data.Global.NewConfirmed);
     setNewRecovered(res.data.Global.NewRecovered);
     setNewDeaths(res.data.Global.NewDeaths);
     setCovidSummary(res.data);
      setLoading(false);
    })
    .catch(err=>
      {
        console.log(err);
      })
  }, [])



const formateDateHere = (date)=>{
  const d=new Date(date);
  const year=d.getFullYear();
  const month=`0${d.getMonth()+1}`.slice(-2);
  const _date=`0${d.getDate()}`.slice(-2);
  return `${year}-${month}-${_date}`;
}

const countryHandle = (e)=>{
  setCountry(e.target.value);
    const d=new Date();
  const to=formateDateHere(d);
  const from =formateDateHere(d.setDate(d.getDate()-days)); 
 console.log(from,to);
    coronaByDays(e.target.value,from,to);
   
}

const daysHandle = (e)=>{
  
  setDays(e.target.value);
  const d=new Date();
  const to=formateDateHere(d);
  const from =formateDateHere(d.setDate(d.getDate()-e.target.value)); 
  coronaByDays(country,from,to);
  
  

}


const coronaByDays=(countrySlug,from,to)=>{
  axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
  .then(res=>{
  //  console.log(res);
    const yAxis=res.data.map(d=>d.Cases);
    const xAxisLabel=res.data.map(d=>d.Date);





   const covidDetails = covidSummary.Countries.find(country=>country.Slug === countrySlug);
    setCoronaCount(yAxis);
    setLabel(xAxisLabel);
    setTotalConfirmed(covidDetails.TotalConfirmed);
    setTotalRecovered(covidDetails.TotalRecovered);
    setTotalDeaths(covidDetails.TotalDeaths);
    setNewConfirmed(covidDetails.NewConfirmed);
    setNewRecovered(covidDetails.NewRecovered);
    setNewDeaths(covidDetails.NewDeaths);
  })
  .catch(err=>{
    console.log(err);
  })
}

    return(
        <div  style={{width:'80%',margin:'auto'}}>
                    <div  style={{display:'flex' , justifyContent:'center'}}> <BeatLoader
                  
                  size={10}
                  color={"#123abc"}
                  loading={loading}
                /></div>
          <CovidSum 
          tConfirmed={totalConfirmed}
          tDeaths={totalDeaths}
          tRecovered={totalRecovered}
          nRecovered={newRecovered}
          nConfirmed={newConfirmed}
          nDeaths={newDeaths}
          country={country}
          />
       <br />

          <div value={country} style={{width:'50%',marginLeft:'30%'}}>
           
            <select  onChange={countryHandle} style={{padding:'5px'}}> <option value=''>SelectCountry</option>
              {covidSummary.Countries && covidSummary.Countries.map(country=>
              <option key={country.Slug} value={country.Slug}>
                    {country.Country}
              </option>)}
            </select>
            <select  onChange={daysHandle} value={days} style={{padding:'5px'}}>
              <option value="">SelectDays</option>
              <option value='7'>Last 7 days..</option>
              <option value='30'>Last 30 days..</option>
              <option value='90'>Last 90 days..</option>
            </select>
          </div>

              

          <LineGraph
            yAxis={coronaCount}
            label={label}
          />
       </div>
      
    )}

export default Graph;