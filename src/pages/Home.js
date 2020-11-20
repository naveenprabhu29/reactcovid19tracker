import React,{ useEffect , useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../App.css';

import Columns from 'react-columns';
import Form from 'react-bootstrap/Form';
import ReactGA from 'react-ga';
import NumberFormat from 'react-number-format';
import { BeatLoader } from 'react-spinners';



function Home() {
  const [latest,setLatest]=useState([]); 
  const [result,setResult]=useState([]);
  const [searchRes,setSearchRes]=useState("");
  const [loading,setLoading]=useState(true);
  useEffect(()=>{

    ReactGA.initialize('UA-182816809-1'); 
    ReactGA.pageview(window.location.pathname + window.location.search);
    axios.all([
        axios.get('https://corona.lmao.ninja/v2/all'),
        axios.get('https://corona.lmao.ninja/v2/countries')

      ]).then(res=>{
        
      setLatest(res[0].data);
      setResult(res[1].data);
      setLoading(false);
    })
    .catch(err=>{
      console.log(err);
    });
  },[])

      const filterCountry=result.filter(e=>{
        return searchRes !=="" ?e.country.toLowerCase().includes(searchRes.toLowerCase()):e;
      })
  const countries=filterCountry.map((data,i)=>{
    return(
     
      <Card key={i} className='text-center' bg='white' text='black'
  border="dark" style={{margin:'10px'}}  >
    <Card.Img variant="top" src={data.countryInfo.flag} style={{height:'300px'}}/>
    <Card.Body style={{color:'black'}}>
    <Card.Title>{data.country}</Card.Title>
      <Card.Text style={{color:'black'}}>
        Cases    {data.cases}
              
      </Card.Text>
      <Card.Text style={{color:'black'}}> Deaths   {data.deaths}</Card.Text>
      <Card.Text style={{color:'black'}}> Recovered {data.recovered}</Card.Text>
      <Card.Text style={{color:'black'}}> TodayCases {data.todayCases}</Card.Text>
      <Card.Text style={{color:'black'}}> TodayDeaths {data.todayDeaths}</Card.Text>
      <Card.Text style={{color:'black'}}>Active {data.active}</Card.Text>
      <Card.Text style={{color:'black'}}>Critical {data.critical}</Card.Text>
    </Card.Body>
    
  </Card>
    )
  });
  const timer=new Date(parseInt(latest.updated));
  const lastUpdated=timer.toLocaleString();

    var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];


//For Google Analytics and gives data to the GA
const HandleSearchBar = () =>{
  ReactGA.event({
    category:'Search bar',
    action:'Clicked on Search Bar',
    label:'HOME_PAGE',
  });
  
}



  return (
    <div style={{display:'flex',justifyContent:'center'}}>
    <div className='home-bg'>
       <div  style={{display:'flex' , justifyContent:'center'}}> <BeatLoader
         
          size={10}
          color={"#123abc"}
          loading={loading  }
        /></div>
      <br/>
               <h3 style={{textAlign:'center'}}>Covid-19 Live Stats<sub>np</sub></h3>
      <br/>
        <CardDeck>
  <Card className='text-center' bg='warning' text='white'
  border="dark" style={{margin:'10px'}}  >
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text style={{color:'white'}}>
        <NumberFormat thousandSeparator={true} displayType='text' value={latest.cases}/>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last Update <NumberFormat thousandSeparator={true}  thousandsGroupStyle='lakh' displayType='text' value={lastUpdated} /> </small>
    </Card.Footer>
  </Card>
  <Card  className='text-center'
  bg='danger' text='white'
  border="dark" 
  style={{margin:'10px'}} >
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text style={{color:'white'}}>
        <NumberFormat thousandSeparator={true} thousandsGroupStyle='lakh' displayType='text' value={latest.deaths}/>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last Update {lastUpdated} </small>
    </Card.Footer>
  </Card>
  <Card className='text-center'
  bg='success' text='white'
  border="dark"  style={{margin:'10px'}} >
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text style={{color:'white'}}>
 <NumberFormat thousandSeparator={true} thousandsGroupStyle='lakh' displayType='text' value={latest.recovered}/>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last Update {lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardDeck><br/>
  <Form>
  <Form.Group controlId="formGroupSearch" style={{width:'50%',marginLeft:'30%',border:'3px solid black'}}>
  
    <Form.Control  type="text" 
      placeholder="Search a Country"
      onChange={e=>setSearchRes(e.target.value)} 
      onClick={HandleSearchBar}/>
     
  </Form.Group>
  
</Form>
<Columns queries={queries}>{countries}</Columns>
    </div>
    </div>
  );
}

export default Home;
