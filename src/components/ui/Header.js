import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Modal, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showw, setShoww] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const Close = () => setShoww(false);
  const Show = () => setShoww(true);


  let Register = () => {
    let u = document.querySelector('input[name=username]').value;
    let e = document.querySelector('input[name=email]').value;
    let p = document.querySelector('input[name=password]').value;
    console.log("u--->", u)
    console.log("u--->", e)
    console.log("u--->", p)

    let payload = {
      "username": u,
      "email": e,
      "password": p
    }
    console.log("payload--->", payload)



    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch(() => { })
  }








  return (


    <header>
      <Container fluid>
        <Row>
          <Col >
          <Navbar bg="light" expand="lg" className=' '>
        <Container fluid >
          <Link to='/' className='homelogo navi a_tbdr fs-1'>PLASHOE</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-4">
              <Nav.Item>
                <Link to="men" className='navi  ms-5 fs-6 fw-semibold'>MEN</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="WOMEN" className='navi  ms-4 fs-6'>WOMEN</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="COLLECTION" className='navi  ms-4 fs-6'>COLLECTION</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="LOOKBOOk" className='navi  ms-4 '>LOOKBOOK</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="sale" className='navi  ms-4 '>SALE</Link>
              </Nav.Item>
              <Nav.Item>
              <Link to="story" className='navi  ms-4 '>OUR STORY</Link>

              </Nav.Item>
              <Nav.Item>
              <Link to="contact" className='navi  ms-4 '>CONTACT</Link>
              </Nav.Item>

            
              <Col  className=' a_tbdr ms-5 float-left log'>
                
                  <Button onClick={handleShow} variant="light" className='' >
                    Login
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title >LOGIN</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={() => { handleClose() }}>
                          Submit
                        </Button>
                      </Form>
                    </Modal.Body>

                  </Modal>

                
                <span>|</span>

                <Button onClick={Show} variant="light" >
                  REGISTER
                </Button>

                <Modal show={showw} onHide={Close}>
                  <Modal.Header closeButton>
                    <Modal.Title >REGISTER</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>


                    <Form.Group className="mb-3" id='username'>
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder=" username" name="username" />

                    </Form.Group>
                    <Form>
                      <Form.Group className="mb-3" id='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />

                      </Form.Group>

                      <Form.Group className="mb-3" id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={Close}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                      Register()
                      Close()
                    }}>
                      Submit
                    </Button>
                  </Modal.Footer>

                </Modal>

            
              </Col>



            </Nav>
          </Navbar.Collapse>


        </Container>
      </Navbar>
          
          </Col>
        
        </Row>
      </Container>
         
    

   
  
      



    </header>
  )
}
