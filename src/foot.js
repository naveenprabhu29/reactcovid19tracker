import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icons'
import {MDBContainer,  MDBFooter } from "mdbreact";


const Foot = () => {
  return (
    <div style={{width:'100%',bottom:'0px'}}>
    <MDBFooter color="white" className="font-small pt-4 mt-4">
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{color:"black"}} >
          &copy; {new Date().getFullYear()} Copyright: <h5> NP </h5><a  style={{fontWeight:'bolder',color:"black"}} href="https://github.com/naveenprabhu29/reactcovid19tracker"> <i class="fab fa-github"></i>GitHub </a>
        </MDBContainer>
        
        <MDBContainer><a  href='https://www.linkedin.com/in/thenaveenprabhu/'  style={{fontWeight:'bolder',color:"black"}} ><i class="fab fa-linkedin"></i>LinkedIN</a></MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}
export default Foot;