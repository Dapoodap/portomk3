import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import me from '../../assets/Me.png';
import {easeInOut, motion} from 'framer-motion' 

function Previewme() {
  const imageAnimate = {
    initial :{
      opacity:0,x:-200
    },
    animate:{
      opacity:1,x:0,
      transition:{duration:2,ease:easeInOut}
    }
  }
  const boxAnimate = {
    initial :{
      opacity:0,x:200
    },
    animate:{
      opacity:1,x:0,
      transition:{duration:2,ease:easeInOut}
    }
  }
  return (
    <Container id="action1" fluid className=" overflow-hidden" style={{paddingTop:'1px',paddingBottom:'1px'}}>
        <Row className="align-items-center no-gutters">
          <Col md={6} className="text-center" style={{ backgroundColor: 'white' }}>
            <motion.div 
            variants={imageAnimate}
            initial="initial"
            whileInView="animate"
            viewport={{ 
            once:true
           }} 
            className="image d-flex justify-content-center align-items-center" style={{ height: '100vh', margin: '0' }}>
              <img src={me} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} alt="" className="img-fluid" />
            </motion.div>
          </Col>
          <Col md={6} style={{ backgroundColor: '#87CEFA' }}>
            <motion.div
            variants={boxAnimate}
            initial="initial"
            whileInView="animate"
            viewport={{ 
            once:true
           }} 
            className="desc p-4" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card className="p-4" style={{ maxWidth: '400px', boxShadow: 'rgb(0, 0, 0) -9px 13px 0px, rgba(0, 0, 0, 0.44) -14px 20px 0px' }}>
                <Card.Body>
                  <Card.Text>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis cum molestiae omnis quibusdam ratione dolorum fugit error, facere alias! Dolor optio quod praesentium eos minus quisquam ratione culpa sequi facere.</p>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis cum molestiae omnis quibusdam ratione dolorum fugit error, facere alias! Dolor optio quod praesentium eos minus quisquam ratione culpa sequi facere.</p>
                    <br />
                    <p>Lorem ipsum, ere.</p>
                  </Card.Text>
                </Card.Body>
                <Button style={{ maxWidth: '50%' }}>Explore Me</Button>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
  )
}

export default Previewme