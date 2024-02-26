import { Col, Container, Row } from "react-bootstrap"
import edu from "../../assets/edu.png"
function Section2() {
  return (
    <Container className="my-5">
        <Row className="my-5 p-2"style={{maxWidth:'50rem',margin:'auto',display:'flex',justifyContent:'space-between'}}>
        <div>
        <img src={edu} width={50} alt="" />
        <h2>Education And Experience</h2>
        </div>
        </Row>
        <Row className="p-2 rowed"style={{ borderBottom:'3px solid #5988a5',maxWidth:'50rem',margin:'auto',display:'flex',justifyContent:'space-between'}}>
            <Col md={"auto"} >
                <h3 className="sectionTitle">9 Public High School Semarang</h3>
                <h5 className="sectionTitle">Science Class</h5>
                <p>Jl. Cemara Raya, Padangsari, Banyumanik, Semarang</p>
            </Col>
            <Col md={"auto"} className="d-flex align-items-end">
                <p>2018 - 2020</p>
            </Col>
        </Row>
        <Row className=" p-2 rowed" style={{ borderBottom:'3px solid #5988a5',maxWidth:'50rem',margin:'auto',display:'flex',justifyContent:'space-between'}}>
            <Col md={"auto"} >
                <h3 className="sectionTitle">Dian Nuswantoro University</h3>
                <h5 className="sectionTitle">Computer Science</h5>
                <p>Jl. Imam Bonjol No.207, Pendrikan Kidul, Semarang Tengah, Semarang</p>
            </Col>
            <Col md={"auto"} className="d-flex align-items-end">
                <p>2020 - 2024</p>
            </Col>
        </Row>
        <Row className=" p-2 rowed" style={{ borderBottom:'3px solid #5988a5',maxWidth:'50rem',margin:'auto',display:'flex',justifyContent:'space-between'}}>
            <Col md={"auto"} >
                <h3 className="sectionTitle">Dian Nuwantoro Computer Club</h3>
                <h5 className="sectionTitle">Mobile Game Staff, Peer Mentor</h5>
                <p>Jl. Nakula I No 5 - 11 Semarang Kompleks UKM UDINUS, Gedung F.2.K</p>
            </Col>
            <Col md={"auto"} className="d-flex align-items-end">
                <p>2021 - 2022</p>
            </Col>
        </Row>
        <Row className=" p-2 rowed" style={{ borderBottom:'3px solid #5988a5',maxWidth:'50rem',margin:'auto',display:'flex',justifyContent:'space-between'}}>
            <Col md={"auto"} >
                <h3 className="sectionTitle">Skilvul : #Tech4Impact Study Independent</h3>
                <h5 className="sectionTitle">React Js Front End Web Developer</h5>
                <p>Kampus Merdeka 2022</p>
            </Col>
            <Col md={"auto"} className="d-flex align-items-end">
                <p>Aug 2022 - Dec 2022</p>
            </Col>
        </Row>
        <Row className=" p-2 rowed" style={{ borderBottom:'3px solid #5988a5',maxWidth:'50rem',margin:'auto',display:'flex',justifyContent:'space-between'}}>
            <Col md={"auto"} >
                <h3 className="sectionTitle">Dian Nuswantoro  University</h3>
                <h5 className="sectionTitle">Part Time Computer Lab Assistant</h5>
                <p>Jl. Nakula I No 5 - 11 Semarang Kompleks UKM UDINUS, Gedung D</p>
            </Col>
            <Col md={"auto"} className="d-flex align-items-end">
                <p>2022 - 2024</p>
            </Col>
        </Row>
        <Row className=" p-2 rowed" style={{ borderBottom:'3px solid #5988a5',maxWidth:'50rem',margin:'auto',display:'flex',justifyContent:'space-between'}}>
            <Col md={"auto"} >
                <h3 className="sectionTitle">Bangkit Academy </h3>
                <h5 className="sectionTitle">Cloud Computing Garduate</h5>
                <p>Kampus Merdeka 2023</p>
            </Col>
            <Col md={"auto"} className="d-flex align-items-end">
                <p>Feb 2023 - Jul 2023</p>
            </Col>
        </Row>
        <Row className=" p-2 rowed" style={{ borderBottom:'3px solid #5988a5',maxWidth:'50rem',margin:'auto',display:'flex',justifyContent:'space-between'}}>
            <Col md={"auto"} >
                <h3 className="sectionTitle">Programmer_Males; Community</h3>
                <h5 className="sectionTitle">Core Team</h5>
                <p>Depok, Jawa Barat, Indonesia · Remote</p>
            </Col>
            <Col md={"auto"} className="d-flex align-items-end">
                <p>2022 - 2023</p>
            </Col>
        </Row>
    </Container>

  )
}

export default Section2