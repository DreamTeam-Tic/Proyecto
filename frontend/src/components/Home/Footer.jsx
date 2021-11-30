import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Row } from 'react-bootstrap';
import Face  from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import Github from '../../assets/github.png'
function Footer() {
    
  return (
    <MDBFooter color="light" className="font-small pt-4 mt-4 text-center">
      <MDBContainer fluid className="text-center text-black text-md-left">
        
          <MDBCol md="12">
            <h5 className="title">Pets For Always</h5>
          </MDBCol>
          <MDBRow md="3">
            <div className={Row}>
            <div className="d-flex justify-content-center">
            <a target="_blank" rel="noreferrer" href="https://es-la.facebook.com/">  
            <img src = {Face} width="25" height="25" alt='Facebook'/>
            </a>
            
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/?hl=es">
            <img src = {Instagram} width="25" height="25" alt='Instagram'/>
            </a>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/?lang=es"> 
            <img src = {Twitter} width="25" height="25" alt='Twitter'/>
            </a>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <a target="_blank" rel="noreferrer" href="https://github.com/DreamTeam-Tic/"> 
            <img src = {Github} width="25" height="25" alt='Github'/>
            </a>
            </div>
            </div>  
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright bg-light text-center text-black py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="Pets For Always" className="text-dark"> Pets For Always </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    
    );
}

export default Footer
