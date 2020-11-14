import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import '../App.css';
import Card from 'react-bootstrap/Card';


const About=()=>{
  
    const fadeImages = [
       'https://cdn.cnn.com/cnnnext/dam/assets/200226232540-07-coronavirus-prevention-super-169.jpg',
        'https://static.theprint.in/wp-content/uploads/2020/03/Corona1-1-696x392.jpg',
        'https://cdn.vox-cdn.com/thumbor/pzK7xndLthcwjVc4Aq0te1Zqhdk=/0x0:4049x2700/1200x675/filters:focal(1208x884:1854x1530)/cdn.vox-cdn.com/uploads/chorus_image/image/66379373/GettyImages_1202999295.0.jpg',
 
      ];

     

    return(
        <div>
            <div className="cont-slide">
                        <div className="slide-container">
                    <Fade>
                        <div className="each-fade">
                        <div className="image-container">
                            <img   style={{width:"100%",height:'70%'}} src={fadeImages[0]} />
                        </div> 
                        </div>
                        <div className="each-fade">
                        <div className="image-container">
                            <img   style={{width:"100%",height:'70%'}} src={fadeImages[1]} />
                        </div> 
                        </div>
                        <div className="each-fade">
                        <div className="image-container">
                            <img   style={{width:"100%",height:'60%'}} src={fadeImages[2]} />
                        </div> 
                        </div>
                        
                    
                    </Fade>
                    </div>
                </div>
            
            <br></br>
            <div>
        <Card className="text-center card" style={{alignItems:'center',margin:'auto', backgroundColor:"wheat"}}>
                <Card.Header>#StayHome</Card.Header>
                <Card.Body>
                    <Card.Title>theNaveenPrabhu</Card.Title>
                    <Card.Text style={{color:'Black'}}>
                    Connect Me Here <a  href='https://www.linkedin.com/in/thenaveenprabhu/'  style={{fontWeight:'bolder',color:"black"}} ><i class="fab fa-linkedin"></i>LinkedIN</a>
                    </Card.Text>
                  
                </Card.Body>
        
        </Card>
            </div>

        </div>
    )}

export default About;