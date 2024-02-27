import { Card, Col, Container, Row } from "react-bootstrap";
import boy from "../../assets/boy.png";
import reactjs from "../../assets/tools/react.png";
import nodejs from "../../assets/tools/nodejs.png";
import github from "../../assets/tools/github.png";
import boost from "../../assets/tools/boostrap.png";
import js from "../../assets/tools/js.png";
import mongo from "../../assets/tools/mongo.png";
import mysql from "../../assets/tools/mysql.png";
import express from "../../assets/tools/exp.png";
import php from "../../assets/tools/php.png";
import netflix from "../../assets/netflix.png";
import riot from "../../assets/riot.png";
import project from "../../assets/project.png";
import spotify from "../../assets/spotify.png";
import song from "../../assets/song.jpg";
import movie from "../../assets/movie.jpg";
import valo from "../../assets/valo.jpg";
import gold from "../../assets/gold.png";
import { easeInOut, motion } from 'framer-motion';


function Section1() {
  const fadeinandouticon ={
    initial: { opacity: 0},
    animate: { opacity:1,transition:{duration:1.5,ease:easeInOut}},
  }
  const logo ={
    initial: { y:-100},
    animate: { y:0,transition:{duration:1.5,ease:easeInOut}},
  }
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#87cefa",
          height: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1
          style={{ fontSize:'50px',fontWeight:'500',letterSpacing:'2px',wordSpacing:'2px',fontFamily:'"Bevan", serif' }}
          >Get To Know Me</h1>
        </div>
      </Container>
      <Container className="my-4">
        <Row>
          <Col md={6} sm={12} className="mx-auto p-3">
            <motion.div
            variants={fadeinandouticon}
            initial="initial"
            whileInView="animate"
            viewport={{ 
              once:true
             }}
            ><div>
              <img className="my-3" src={boy} width={50} alt="" />
            </div>
            <div
              style={{
                textAlign: "justify",
                lineHeight: "25px",
                letterSpacing: "1px",
              }}
            >
              <h1
              style={{ fontSize:'40px',fontWeight:'500',letterSpacing:'2px' }}
              >About Me</h1>
              <p>
                I'm a fresh graduate from computer science with informathics engineering
                major at Dian Nuswantoro University Semarang. I'm finishing my 3,5 year study in last January 2024. I was also active in my uni's organization
                such as DNCC (Dian Nuswantoro Computer Club) and MPM-KM Dian
                Nuswantoro. i'm so passionate and so enthusiast with tech field
                that's why im try to always learn and learn so i wanna become good in
                this field.
              </p>
              <p>
                I'm focusing myself as a fullstack developer since my second year
                and start learning product development, UI/UX, website and
                mobile client side, building and manage restAPI and also Cloud Computing. As a frontend developer I create stuff and
                like mixing tech with art to create not only functional but
                visually appealing projects. In backend side im really into making backend service as the requirement ask.
              </p>
            </div></motion.div>
              
            
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <Row>
          <Col md={6} sm={12} className="mx-auto p-3">
            <motion.div
            variants={fadeinandouticon}
            initial="initial"
            whileInView="animate"
            viewport={{ 
              once:true
             }}
              style={{
                textAlign: "justify",
                lineHeight: "25px",
                letterSpacing: "1px",
              }}
            >
              <h1
              style={{ fontSize:'40px',fontWeight:'500',letterSpacing:'2px' }}
              >Why i make this...</h1>
              <p>
                I made this website for branding myself and find new friends
                with same enthushiast in frontend things. Also helping some
                other peoples who needs my help 😉
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <Row>
          <Col md={6} sm={12} className="mx-auto p-3">
            <motion.div
            variants={fadeinandouticon}
            initial="initial"
            whileInView="animate"
            viewport={{ 
              once:true
             }}
            >
<div>
              <h1
              style={{ fontSize:'40px',fontWeight:'500',letterSpacing:'2px' }}
              >Tools i usually used</h1>
            </div>
            <div
              style={{
                textAlign: "justify",
                lineHeight: "25px",
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              <img className="my-3" src={js} width={80} alt="" />
              <img className="my-3" src={php} width={80} alt="" />
              <img className="my-3" src={github} width={80} alt="" />
              <img className="my-3" src={nodejs} width={80} alt="" />
              <img className="my-3" src={reactjs} width={80} alt="" />
              <img className="my-3" src={express} width={80} alt="" />
              <img className="my-3" src={boost} width={80} alt="" />
              <img className="my-3" src={mongo} width={80} alt="" />
              <img className="my-3" src={mysql} width={80} alt="" />
            </div>
            </motion.div>
            
          </Col>
        </Row>
      </Container>
      <Container className="my-3">
        <Row>
          <Col md={6} sm={12} className="mx-auto p-3">
            <div
              style={{
                textAlign: "justify",
                lineHeight: "25px",
                letterSpacing: "1px",
              }}
            >
              <h1>Another else ...</h1>
              <p>
                When Im not in coding mode, i'm usually read some blog in medium
                or quora about new insight. I'm also into{" "}
                <a href="https://open.spotify.com/user/7qvhmogixuav9dqfxes85fn8q?si=748a6957b5a84208">
                  music
                </a>{" "}
                and watch some movies or series. You also probably catch me
                playing games sometimes, I play as LaZBoy#essex in Valorant, or
                szadhap_ in GTA v Online
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-4 d-flex justify-content-center">
        <motion.div
        variants={fadeinandouticon}
        initial="initial"
        whileInView="animate"
        viewport={{ 
          once:true
         }}
        style={{textAlign: "center" }}>
          <h1 style={{ fontSize:'40px',fontWeight:'500',letterSpacing:'2px' }} className="text-start">Lately</h1>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={6} className="my-3">
              <Card
                className="d-flex flex-column h-100"
                style={{ maxWidth: "30rem", width: "100%" }}
              >
                <Card.Header className="d-flex align-items-end">
                  <img src={project} width={40} alt="Logo 1" />
                  <h5 className="mx-3">Lastest Project</h5>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                  <ul className="text-start  mt-auto fw-medium fs-6">
                    <li>
                      <a href="#">Kos Management System Web Based For My Thesis</a>
                    </li>
                    <li>
                      <p>Looking For Job</p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6} className="my-3">
              <Card
                className="d-flex flex-column h-100"
                style={{ maxWidth: "30rem", width: "100%" }}
              >
                <Card.Header className="d-flex align-items-end">
                  <img src={spotify} alt="Logo 2" width={40} />
                  <h5 className="mx-3">Now Playing</h5>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                  <Row>
                    <Col md={6}>
                      <h3>Redrum</h3>
                      <p>21 Savage</p>
                    </Col>
                    <Col md={6}>
                      <img
                        src={song}
                        width={100}
                        alt="Image 2"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={6} className="my-3">
              <Card
                className="d-flex flex-column h-100"
                style={{ maxWidth: "30rem", width: "100%" }}
              >
                <Card.Header className="d-flex align-items-end">
                  <img src={netflix} width={40} alt="Logo 1" />
                  <h5 className="mx-3">Recently watched</h5>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                  <Row>
                    <Col md={6}>
                      <h1>Land Of Bad</h1>
                      <p>&#9733; &#9733; &#9733; &#9733;</p>
                    </Col>
                    <Col md={6}>
                      <img
                        src={movie}
                        width={100}
                        alt="Image 2"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={6} className="my-3">
              <Card
                className="d-flex flex-column h-100"
                style={{ maxWidth: "30rem", width: "100%" }}
              >
                <Card.Header className="d-flex align-items-end">
                  <img src={riot} alt="Logo 2" width={40} />
                  <h5 className="mx-3">Recently Played</h5>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                  <Row>
                    <Col md={6}>
                      <h3>Valorant</h3>
                      <img
                        src={gold}
                        width={40}
                        alt="Image 2"
                        className="img-fluid"
                      />
                      <p>Gold 3</p>
                    </Col>
                    <Col md={6}>
                      <img
                        src={valo}
                        width={100}
                        alt="Image 2"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </>
  );
}

export default Section1;
