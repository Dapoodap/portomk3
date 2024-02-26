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
    <Container className="my-5 py-5" style={{ height: 'fit-content' }}>
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
                <Card.Title>Frontend Development</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <Card.Title>Backend Development</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <Card.Title>Cloud Computing</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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