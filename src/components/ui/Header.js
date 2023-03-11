import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      

<div className='container-fluid'>
  <div className='row '>
    <div className='col-1  mt-2 ms-5 fs-2 fw-semibold'>
     <Link to='/' className='homelogo'>PLASHOE</Link>
    </div>
    <div className="col-8 ">
  <Nav className=' mt-4 '>
     

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
  </div>
  <div className='col-2  mt-4 ms-5'>
   
       <Link to="story" className='navi   ms-3'>OUR STORY</Link>
    
       <Link to="contact" className='navi  ms-3'>CONTACT</Link>
    

  </div>
  </div>
  

     </div>

    </header>
  )
}
