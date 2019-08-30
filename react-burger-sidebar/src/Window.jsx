import React, {Component} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import Sidebar from "./Sidebar";

export default class Window extends Component {
  render () {
    return  (
     <div style={{ height: '100vh', width: '100vw'}}>
       <Container style={{ maxWidth: '100vw' }}>
         <Row>
           <Col style={{
             height: '100vh',
             padding:'20px 20px 20px 20px'
           }} xs={3}>
             <Sidebar />
           </Col>
           <Col style={{ height: '100vh'}}>
             Content
           </Col>
         </Row>
       </Container>
     </div>
    )
  }
}