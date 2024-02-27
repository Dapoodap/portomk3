import { Card, Col, Container, Row } from "react-bootstrap"
import {easeInOut, motion} from 'framer-motion'

function CardSkill() {
  
  const animatedBox = {
    initial :{
      opacity:0,x:200,y:-200
    },
    animate:{
      opacity:1,x:0,y:0,
      transition:{duration:1.5,ease:easeInOut,delay:0.5}
    }
  }

  return (
    <Container className="my-5 py-5" style={{ height: 'fit-content',overflow:'hidden' }}>
        <h1 style={{ letterSpacing: '2px', fontSize: '35px', fontWeight: '600' }}>WHAT I DO</h1>
        <hr className="my-4" style={{ borderTop: '2px solid #ccc' }} />
        <Row>
          <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1, transition:{duration:1.5,ease:easeInOut} }}
          className="d-flex justify-content-center align-items-center gap-4 flex-wrap w-100 p-0">
          <Col md={4} className="mb-4">
            <motion.div
            variants={animatedBox}
            initial="initial"
            whileInView='animate'
            >
            <Card className="hover-shadow">
              <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                <Card.Title
                style={{ fontSize:'28px',marginBottom:'16px',fontWeight:'600',letterSpacing:'1px' }}
                >Frontend Development</Card.Title>
                <Card.Text 
                style={{ fontSize:'18px',fontWeight:'400',lineHeight:'30px' }}>
                  <ul>
                    <li>
                      <p>Slicing design from some UI design to some website project.</p>
                    </li>
                    <li>
                      <p>Make some website more responsive</p>
                    </li>
                    <li>
                      <p>Built some client side features such as (fetching data, handle storage, API, etc)</p>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
             variants={animatedBox}
             initial="initial"
             whileInView='animate'
            >
              <Card className="hover-shadow">
              <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                <Card.Title style={{ fontSize:'28px',marginBottom:'16px',fontWeight:'600',letterSpacing:'1px' }}>Backend Development</Card.Title>
                <Card.Text style={{ fontSize:'18px',fontWeight:'400',lineHeight:'38px' }}>
                  <ul>
                    <li>
                      <p>Built robust restAPI with propper requirement.</p>
                    </li>
                    <li>
                      <p>Make some documentation for the API, so anyone use can use it easily.</p>
                    </li>
                    <li>
                      <p>Setting up database and make it safe</p>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            </motion.div>
            
          </Col>
          <Col md={4} className="mb-4">
            <motion.div
             variants={animatedBox}
             initial="initial"
             whileInView='animate'
            >
              <Card className="hover-shadow">
              <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                <Card.Title
                style={{ fontSize:'28px',marginBottom:'16px',fontWeight:'600',letterSpacing:'1px' }}
                >Cloud Computing</Card.Title>
                <Card.Text style={{ fontSize:'18px',fontWeight:'400',lineHeight:'30px' }}>
                  <ul>
                    <li>
                      <p>Designing architecture development in GCP (Google Cloud PLatform).</p>
                    </li>
                    <li>
                      <p>Deployment using Google Cloud SQL, Google Cloud Run, Google Cloud App Engine.</p>
                    </li>
                    <li>
                      <p>Managing IAM Service in GCP (Google Cloud Platform)</p>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            </motion.div>
            
          </Col>
          </motion.div>
          
        </Row>
      </Container>
  )
}

export default CardSkill