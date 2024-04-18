import { useState } from "react";
import {Button, Card, Container, Modal, Row } from "react-bootstrap";
import edu from "../../assets/edu.png";
import certif from "../../assets/certificate.png";
import dicoce from "../../assets/cedico.jpg";
import coursera from "../../assets/coursera.jpg";
import bangkit from "../../assets/bangkit.png";
import gitdico from "../../assets/gitdico.jpg";
import greenpeacecaps from "../../assets/greenpeacecaps.png";
import skilvul from "../../assets/skilvul.png";
import toef from "../../assets/toef.jpg";
import uiux from "../../assets/uiux.png";
import webdico from "../../assets/webdico.jpg";
import webskil from "../../assets/webskil.png";
import { easeInOut, motion } from "framer-motion";



function MyVerticallyCenteredModal(props) {
 
  const {data} = props;
  console.log(data)
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-0"
    >
      <Modal.Body className="p-0">
      <Card
            className="p-0"
            style={{
              width: "100%",
              border: "1px solid #EADEDE",
              // boxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
              // WebkitBoxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
              // MozBoxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
              cursor:'pointer',
            }}
          >
            <Card.Img loading="lazy" variant="top" src={data?.img} />
            <Card.Body>
              <Card.Title>
                <h3>{data?.title}</h3>
              </Card.Title>
              <Card.Text>
                <p>{data?.descModal}</p>
              </Card.Text>
            </Card.Body>
            </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Section3() {
  const fadeinandout = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5, ease: easeInOut } },
  };
  const card = {
    initial: { y:-100 },
    animate:(index)=>({
      y:0,
      transition:{
        duration: 1.5,
        delay: 0.1 * index,
      },
    }),
  };
  const Certification = [
    {"title": "Menjadi Cloud Engineer By Dicoding","img":dicoce,"desc" : "The Cloud Engineer By Dicoding is a course from bangkit program which...","descModal":"The Cloud Engineer By Dicoding is a course from bangkit program which learn about how manage cloud project in Google Cloud Platform (GCP). This course is mandatory and really impactfull for the capstone later"},
    {"title": "Bit And Byte Of Computer Networking By Coursera", "img" : coursera ,"desc" : "The Bit And Byte Of Computer Networking is course from bangkit...","descModal":"The Bit And Byte Of Computer Networking is course from bangkit program which learn about how computer work from inside layer. Also in this course learn how to be sysadmin in computer perception."},
    {"title": "Pemograman Web Pemula By Dicoding", "img" : webdico ,"desc" : "This is the first course from bangkit which for...","descModal":"This is the first course from bangkit which for cohort can manage how web are work especially inside of it for the basic"},
    {"title": "Git and Github Basic By Dicoding", "img" : gitdico ,"desc" : "This is the first course from bangkit which for...","descModal":"This is the first course from bangkit which for cohort can manage how version control system is working and how to manage work as a team for the capstone later"},
    {"title": "TOEFL PBT", "img" : toef ,"desc" : "This is one of the mandataory course from my college before i could take thesis defence...","descModal":"This is one of the mandataory course from my college before i could take the thesis defence in my 7ths semester"},
    {"title": "Bangkit Completion By Google, GOTO, Traveloka", "img" : bangkit ,"desc" : "This was my certificate after im completing bangkit program...","descModal":"This was my certificate after im completing all of the mandatory and non mandatory activities in bangkit program 2023. Im finished with final score arround 95"},
    {"title": "UI/UX Design Mastery (Gold) By Silvul", "img" : uiux ,"desc" : "This is the first course from skilvul in program...","descModal":"This is the first course from skilvul in program skilvul:tech4Impact which need to finish this course before going into product development phase"},
    {"title": "Web Development By Skilvul", "img" : webskil ,"desc" : "This is also the first course from skilvul which for participant in skilvul:tech4Impact...","descModal":"This is also the first course from skilvul which for participant in skilvul:tech4Impact before they goin into react development in the next phase"},
    {"title": "MSIB 2022 Completion By Kampus Merdeka", "img" : skilvul ,"desc" : "This was my certificate after im completing mbkm program...","descModal":"This was my certificate after im completing all of the mandatory and non mandatory activities in mbkm program with skilvul in 2022. Im finished with final score arround 90"},
    {"title": "Capstone Product Innovation Challenge Completion By Greenpeace and Skilvul", "img" : greenpeacecaps ,"desc" :  "This was my certificate after im finished my capstone for Greenpeace...","descModal":"This was my certificate after im finished my capstone for Greenpeace in skilvul:tech4impact program. The capstone that i built was a website for supporting local green activities for their campaign"}, 
  ]
  const [modalShow, setModalShow] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null); // State to store the selected certification data


  const clickCertif = (item) =>{
    setSelectedCertification(item)
    setModalShow(true)
  }
  return (
    <Container>
      <Row
        className="my-5 p-2"
        style={{
          maxWidth: "50rem",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <motion.div
        variants={fadeinandout}
        initial="initial"
        whileInView="animate"
        viewport={{ 
          once:true
         }}
        >
          <img loading="lazy" src={certif} width={60} alt="" />
          <h2>Certificate</h2>
        </motion.div>
      </Row>
      <Row
        className="my-5 p-2"
        style={{
          maxWidth: "100vw",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <motion.div
        variants={fadeinandout}
        initial="initial"
        whileInView="animate"
        viewport={{ 
          once:true
         }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap:'wrap',
            alignItems: "center",
            gap: "30px",
          }}
        >
          {/* <Card
            className="p-0"
            style={{
              width: "18rem",
              border: "1px solid #EADEDE",
              boxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
              WebkitBoxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
              MozBoxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
            }}
          >
            <Card.Img variant="top" src={kos} />
            <Card.Body>
              <Card.Title>
                <h3>Kos Manangement System Web Based</h3>
              </Card.Title>
              <div className="py-0 d-flex gap-2" style={{ marginBottom:'18px' }}>
              <Badge pill bg="secondary">
        React Js
      </Badge>
      <Badge pill bg="secondary">
        Express Js
      </Badge>
      <Badge pill bg="secondary">
        Boostrap
      </Badge>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card> */}
          {Certification.map((item, index) => (
  <motion.div
  variants={card}
  initial="initial"
  whileInView="animate"
  viewport={{ 
    once:true
   }}
   custom={index}
   key={index} style={{ width: '20rem', marginBottom: '20px' }}>
    <Card
      onClick={() => clickCertif(item)}
      className="p-0"
      style={{
        border: "1px solid #EADEDE",
        boxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
        WebkitBoxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
        MozBoxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
        cursor: 'pointer',
      }}
    >
      <Card.Img loading="lazy" variant="top" src={item.img} style={{ maxHeight: '200px', objectFit: 'cover' }} />
      <Card.Body style={{ width: '100%' }}>
        <Card.Title>
          <p>{item.title}</p>
        </Card.Title>
        <Card.Text>
          <p>{item.desc}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <MyVerticallyCenteredModal
      data={selectedCertification}
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </motion.div>
))}

          
        </motion.div>
      </Row>
      
    </Container>
  );
}

export default Section3;
