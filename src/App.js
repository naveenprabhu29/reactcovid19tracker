import React,{ useEffect , useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {
  const [latest,setLatest]=useState(""); 
  useEffect(()=>{
    axios.get('https://coronavirus-19-api.herokuapp.com/all ').then(res=>{
      setLatest(res.data);
    })
    .catch(err=>{
      console.log(err);
    });
  },[])
  return (
    <div >
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
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card  className='text-center'
  bg='danger' text='white'
  border="dark" 
  style={{margin:'10px'}} >
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
      {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='text-center'
  bg='success' text='white'
  border="dark"  style={{margin:'10px'}} >
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
      {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardDeck>
    </div>
  );
}

export default App;
