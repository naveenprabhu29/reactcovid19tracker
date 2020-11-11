import React,{ useEffect , useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Columns from 'react-columns';
import Form from 'react-bootstrap/Form';
import ReactGa from 'react-ga';



function App() {
  const [latest,setLatest]=useState([]); 
  const [result,setResult]=useState([]);
  const [searchRes,setSearchRes]=useState("");
  useEffect(()=>{

    ReactGa.initialize('G-D4V29PHVG5'); 
    ReactGa.pageview('/');
    axios.all([
        axios.get('https://corona.lmao.ninja/v2/all'),
        axios.get('https://corona.lmao.ninja/v2/countries')

      ]).then(res=>{
      setLatest(res[0].data);
      setResult(res[1].data);
    })
    .catch(err=>{
      console.log(err);
    });
  },[])

      const filterCountry=result.filter(e=>{
        return searchRes !=="" ?e.country.includes(searchRes):e;
      })
  const countries=filterCountry.map((data,i)=>{
    return(
     
      <Card key={i} className='text-center' bg='light' text='dark'
  border="dark" style={{margin:'10px'}}  >
    <Card.Img variant="top" src={data.countryInfo.flag} style={{height:'300px'}}/>
    <Card.Body>
    <Card.Title>{data.country}</Card.Title>
      <Card.Text>
        Cases    {data.cases}
              
      </Card.Text>
      <Card.Text> Deaths   {data.deaths}</Card.Text>
      <Card.Text> Recovered {data.recovered}</Card.Text>
      <Card.Text> TodayCases {data.todayCases}</Card.Text>
      <Card.Text> TodayDeaths {data.todayDeaths}</Card.Text>
      <Card.Text>Active {data.active}</Card.Text>
      <Card.Text>Critical {data.critical}</Card.Text>
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
  return (
    <div >
      <br/>
               <h3 style={{textAlign:'center'}}>Covid-19 Live Stats<sub>naveenprabhu</sub></h3>
      <br/>
        <CardDeck>
  <Card className='text-center' bg='warning' text='white'
  border="dark" style={{margin:'10px'}}  >
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        {latest.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last Update {lastUpdated} </small>
    </Card.Footer>
  </Card>
  <Card  className='text-center'
  bg='danger' text='white'
  border="dark" 
  style={{margin:'10px'}} >
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
      {latest.deaths}
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
      <Card.Text>
      {latest.recovered} 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last Update {lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardDeck><br/>
  <Form>
  <Form.Group controlId="formGroupSearch" style={{width:'50%',marginLeft:'30%'}}>
  
    <Form.Control  type="text" 
      placeholder="Search a Country"
      onChange={e=>setSearchRes(e.target.value)} />
     
  </Form.Group>
  
</Form>
<Columns queries={queries}>{countries}</Columns>
    </div>
  );
}

export default App;
