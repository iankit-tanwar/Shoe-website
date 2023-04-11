import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Tab, Tabs, Nav } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { URL } from '../helper/URL'



export default function MensDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [detail, setDetails] = useState('');
  useEffect(() => {
    console.log('productName->', searchParams.get('productName'))
    console.log(searchParams.get('productName'));

    fetch(`http://localhost:1337/api/mens-shoes?populate=*&filters[name][$eq]=${searchParams.get('productName')}`, {
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
        setDetails(data.data)

      })
      .catch((err) => { console.log(err) });

  }, []);




  return (
    <main> <Container className='a_tbdr h-100'>
      <Row>

        <Col xs={10} className=' '>

          {
            detail && detail.map((cv, idx, arr) => {
              return <div className="card mt-5 " key={idx}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={`${URL}` + cv.attributes.img.data.attributes.url} className="figure-img img-fluid rounded h-100" alt="..." />
                  </div>
                  <div className="col-md-8 ">
                    <div className="card-body">
                      <h2 className="card-title mb-3">{cv.attributes.name}</h2>
                      <h4 >{cv.attributes.price}</h4><span>free shipping</span>

                      <p className="card-text mt-3">Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.</p>

                    </div>
                  </div>
                </div>
              </div>





            })

          }



        </Col>

      </Row>
    </Container>
    </main>
  )
}
/*
<Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Description">
        <p>this ha sdfhsdfjsdj</p>
       
      </Tab>
      <Tab eventKey="profile" title="Review">
       
      </Tab>
      
        
      
    </Tabs>*/