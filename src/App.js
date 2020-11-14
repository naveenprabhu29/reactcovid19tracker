import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './Nav';
import Foot from './Foot';
import Graph from './pages/Graph';
import {BrowserRouter as Router,Route} from 'react-router-dom';






class App extends React.Component
{
  render()
  {
    return(
     <div style={{margin:'0'}}> 
     <Router> 
        <Nav/>
        
        
     
          
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/graph' component={Graph}/>
        
           <Foot/>
      
          </Router>
          </div> 
    )
  }
}

export default App;
