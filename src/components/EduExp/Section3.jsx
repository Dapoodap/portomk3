import { useState } from "react";
import {Button, Card, Container, Modal, Row } from "react-bootstrap";
import edu from "../../assets/edu.png";
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
            <Card.Img variant="top" src={data?.img} />
            <Card.Body>
              <Card.Title>
                <h3>{data?.title}</h3>
              </Card.Title>
              <Card.Text>
                <p>{data?.desc}</p>
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
  const Certification = [
    {"title": "Menjadi Cloud Engineer By Dicoding","img":dicoce,"desc" : "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa"},
    {"title": "Bit And Byte Of Computer Networking By Coursera", "img" : coursera ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"},
    {"title": "Pemograman Web Pemula By Dicoding", "img" : webdico ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"},
    {"title": "Git and Github Basic By Dicoding", "img" : gitdico ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"},
    {"title": "TOEFL PBT", "img" : toef ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"},
    {"title": "Bangkit Completion By Google, GOTO, Traveloka, and Kampus Merdeka", "img" : bangkit ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"},
    {"title": "UI/UX Design Mastery (Gold) By Silvul", "img" : uiux ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"},
    {"title": "Web Development By Skilvul", "img" : webskil ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"},
    {"title": "MSIB 2022 Completion By Kampus Merdeka", "img" : skilvul ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"},
    {"title": "Capstone Product Innovation Challenge Completion By Greenpeace and Skilvul", "img" : greenpeacecaps ,"desc" : "The Bit And Byte Of Computer Networking is the bla ablaaa"}  
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
        <div>
          <img src={edu} width={50} alt="" />
          <h2>Certification</h2>
        </div>
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
        <div
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
  <div key={index} style={{ width: '20rem', marginBottom: '20px' }}>
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
      <Card.Img variant="top" src={item.img} style={{ maxHeight: '200px', objectFit: 'cover' }} />
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
  </div>
))}

          
        </div>
      </Row>
      
    </Container>
  );
}

export default Section3;
