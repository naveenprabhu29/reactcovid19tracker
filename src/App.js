import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './Nav';
import Graph from './pages/Graph';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';





class App extends React.Component
{
  render()
  {
    return(
     <Router>  <div>
        <Nav/>
        
       <Switch>
          
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/graph' component={Graph}/>
        
    </Switch>
      
        </div>   </Router>
    )
  }
}

export default App;
