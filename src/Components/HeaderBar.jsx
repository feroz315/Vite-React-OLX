import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';


function HeaderBar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">O|X</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Form className="d-flex gap-4 ">  
        <Col sm="4">
          <Form.Control type="search" placeholder="Pakistan..." />
        </Col>
        
       <Col sm="12">
        <Form.Control type="search" placeholder="Find Card,Moblie Phones and more..." />
        </Col>
        <div className='d-flex gap-2'>
           <Button variant="outline-success">Login</Button>
            <Button variant="outline-success">SELL</Button>  
            </div>             
             </Form> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default HeaderBar;