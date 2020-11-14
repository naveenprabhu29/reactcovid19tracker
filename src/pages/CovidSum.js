import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';




export default function CovidSum(props) {

    const {
        tConfirmed,
        tDeaths,
        tRecovered,
        nConfirmed,
        nDeaths,
        nRecovered,
        country
    }=props
    return (
        <div>
              <div>
              <div><br/>
                  <h2 style={{textAlign:'center',fontWeight:'bold'}}>Covid-Graph</h2><br/>
                  

                    <h3 
                    style={{textAlign:'center',fontWeight:'bold',color:'Background'}} >
                        {country===''? "GLobal Data":country}
                    </h3>
                 <div className='card-div' style={{display:'flex',padding:'4px',margin:'0'}} >  
                    <Card style={{backgroundColor:"black"}}>
                      <span>Confirmed</span>
                        <span><NumberFormat thousandSeparator={true} displayType='text' value={tConfirmed}/></span>
                    </Card>
                    <Card>
                      <span>Recovered</span>
                      <span><NumberFormat thousandSeparator={true} displayType='text' value={tRecovered}/></span>
                    </Card>
                    <Card>
                      <span>Deaths</span>
                        <span><NumberFormat thousandSeparator={true} displayType='text' value={tDeaths}/></span>
                    </Card> 
                 </div>
                 <div className='card-div' style={{display:'flex',padding:'4px'}}>  
                    <Card>
                      <span>New Confirmed</span>
                        <span><NumberFormat thousandSeparator={true} displayType='text' value={nConfirmed}/></span>
                    </Card>
                    <Card>
                      <span>New Recovered</span>
                      <span><NumberFormat thousandSeparator={true} displayType='text' value={nRecovered}/></span>
                    </Card>
                    <Card>
                      <span>New Deaths</span>
                        <span><NumberFormat thousandSeparator={true} displayType='text' value={nDeaths}/></span>
                    </Card> 
                 </div>
             
              </div>
          </div>
        </div>
    )
}
