import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (



    <header>

      <Navbar bg="light" expand="lg" className='h-100'>
        <Container>
          <Link to='/' className='homelogo navi a_tbdr fs-1'>PLASHOE</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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

             



            </Nav>
          </Navbar.Collapse>
          <Col className='ms-5'>
              <Link to="story" className='navi   '>OUR STORY</Link>

                <Link to="contact" className='navi  ms-3 me-3'>CONTACT</Link>

              </Col>
          <Col className='ms-5'> 
          <>
            <Button onClick={handleShow}>
              Login
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>LOGIN</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
            <span>/</span>

            <Link to="contact" className='navi float-left '>SIGNIN</Link></Col>
        </Container>
      </Navbar>



    </header>
  )
}
