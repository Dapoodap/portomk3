import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Section1 from "../components/Porto/Section1";
import edu from "../assets/edu.png";
import kos from "../assets/projkos.png";
import green from "../assets/projgreenish.png";
import fotoin from "../assets/fotoin.png";
import movie from "../assets/skillmovie.png";
import todo from "../assets/todo.png";
import personal1 from "../assets/mk1.png";
import personal2 from "../assets/mk2.png";
import pali from "../assets/pali.png";
import bmi from "../assets/bmi.png";
import wrc from "../assets/wrc.png";
import docapi from "../assets/docapi.png";
import { motion } from "framer-motion";
import Footer from "../components/Footer";


function Porto() {
    const gotoLink = (item) =>{
        window.open(item,"_blank");
    }
  const project = [
    {
      title: "Website Kos Dariz",
      img: kos,
      tools: ["React js", "Express js", "Bostrap", "MySql"],
      desc: "Kos is Bla Bla Blaa",
      link: "https://github.com/Dapoodap/FE_Skripsi",
    },
    {
      title: "Greenish Website",
      img: green,
      tools: ["React js", "Express js", "Redux", "Boostrap", "MongoDB"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "Fotoin Website",
      img: fotoin,
      tools: ["HTML", "CSS", "Javascript"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "Skilmobie Website",
      img: movie,
      tools: ["HTML", "CSS", "Boostrap", "Javascript", "Asyncrhonous"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "Todolist React",
      img: todo,
      tools: ["React js", "Redux", "Boostrap", "TMDB API"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "Personal website Mk.1",
      img: personal1,
      tools: ["HTML", "CSS", "Boostrap", "Javascript"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "Personal website Mk.1",
      img: personal2,
      tools: ["React js", "boostrap"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "Palindrom Generator",
      img: pali,
      tools: ["HTML", "CSS", "Javasript"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "WRC Landing Page",
      img: wrc,
      tools: ["HTML", "CSS"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "BMI Calculator",
      img: bmi,
      tools: ["HTML", "CSS"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "Restfull API For BAtikfy",
      img: docapi,
      tools: ["Expressjs", "MySql", "JWT"],
      desc: "The Cloud Engineer By Dicoding is a Cloud Engineer Certificate Bla Bla Blaa",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
  ];
  return (
    <>
      <Navigation />
      <Section1 />
      <Container className="my-4">
        <div className="my-2" style={{ maxWidth: "90%", margin: "auto" }}>
          <img src={edu} width={50} alt="" />
          <h2>My Project</h2>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4 my-4">
          {project.map((item, index) => (
            <Col key={index}>
              <motion.div
                style={{
                  boxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
                  WebkitBoxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
                  MozBoxShadow: "7px 12px 30px -1px rgba(0,0,0,0.69)",
                }}
                whileHover={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  gotoLink(item.link);
                }}
              >
                <Card
                  className="p-0"
                  style={{
                    border: "1px solid #EADEDE",
                    cursor:'pointer'
                  }}
                >
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>
                      <h3>{item.title}</h3>
                    </Card.Title>
                    <div
                      className="py-0 d-flex gap-0"
                      style={{ marginBottom: "18px",maxWidth:'100%' }}
                    >
                      {item.tools.map((tool, index) => (
                        <Badge
                          key={index}
                          pill
                          bg="secondary"
                          className="me-1"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default Porto;
