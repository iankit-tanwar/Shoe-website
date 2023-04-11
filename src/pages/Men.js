import React, { useEffect, useState } from 'react'
import {   Card, Col, Container, Row, Stack } from 'react-bootstrap'
import { URL } from '../helper/URL';
import { Link, useNavigate } from 'react-router-dom';


export default function Men() {
  const [mensshoe ,setmensShoe]=useState();
  const navigate = useNavigate();


  useEffect(()=>{

    fetch('http://localhost:1337/api/mens-shoes?populate=*',{
      method: "GET",  
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify()
    })
    .then((res)=>{return res.json()})
    .then((data)=> {
      console.log(data.data)
      setmensShoe(data.data)
    })
    .catch((err)=>{console.log(err)});



  },[]);
  
  function handleClick() {
    navigate("/MensDetails");
  }
  return (
    <main>
      <Container className='a_tbdr h-100'>
      <Row>
        
        <Col xs={10} className=' '>

        <Stack direction="horizontal" gap={3}>


          {
            mensshoe&& mensshoe.map((cv,idx,arr)=>{
              return <Card key={idx} style={{ width: '18rem' }} className='text-center' onClick={()=>{handleClick()}}>
              <Card.Img variant="top" src={`${URL}`+cv.attributes.img.data.attributes.url} />
              <Card.Body>
               
              
                <Card.Title >{cv.attributes.name}</Card.Title>
                <span >{cv.attributes.price}</span>
               
              </Card.Body>
            </Card>
            })
          }
        
    
    </Stack>
        
          
        </Col>
        
      </Row>
      
    </Container>
    </main>
  )
}
