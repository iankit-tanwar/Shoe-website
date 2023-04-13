import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Carousel, Col, Container, Row, Stack } from 'react-bootstrap'
import { URL } from '../helper/URL';
import { useNavigate } from 'react-router-dom';


export default function Men() {
  const [mensshoe, setMensShoe] = useState('');
  const [card, setCards] = useState();
  const navigate = useNavigate();




  useEffect(() => {


    fetch('http://localhost:1337/api/mens-shoes?populate=*', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify()
    })
      .then((res) => { return res.json() })
      .then((data) => {
        console.log(data.data)
        setMensShoe(data.data)
      })
      .catch((err) => { console.log(err) });






  }, []);



  return (
    <main>
      <Container className='a_tbdr '>
        <Row>

          <Col xs={10} className=' '>

            <Stack direction="horizontal" gap={3}>


              {
                mensshoe && mensshoe.map((cv, idx, arr) => {
                  return <Card key={idx} style={{ width: '18rem' }} className='text-center ms-1' onClick={() => { navigate("/MensDetails?productName=" + cv.attributes.name) }}>
                    <Card.Img variant="top" src={`${URL}` + cv.attributes.img.data.attributes.url} />
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

      <Container fluid>
        <Row>
          <Col className='p-0'>
            <img src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1877bc4b061%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1877bc4b061%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' className='w-100 caro ms-0'></img>
          </Col>
        </Row>
      </Container>

    </main>






  )
}
