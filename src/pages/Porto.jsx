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
import poli from "../assets/poli.png";
import Footer from "../components/Footer";
import { easeInOut, motion } from "framer-motion";
import logo from "../assets/projecticon.png"
import { useEffect } from "react";


function Porto() {
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
    const gotoLink = (item) =>{
        window.open(item,"_blank");
    }
  const project = [
    {
      title: "Website Kos Dariz",
      img: kos,
      tools: ["React js", "Express js", "Bostrap", "MySql"],
      desc: "Website for kos (Homestay) management system with web based. The website sustain the manager of the kos (Homestay) manage their property easily.",
      link: "https://github.com/Dapoodap/FE_Skripsi",
    },
    {
      title: "Greenish Website",
      img: green,
      tools: ["React js", "Express js", "Redux", "Boostrap", "MongoDB"],
      desc: "Website for Greenpeace (rebrand: Greenish) for local activist to promote their event. User also can join the event from this website",
      link: "https://github.com/orgs/FEBE13/repositories",
    },
    {
      title: "Fotoin Website",
      img: fotoin,
      tools: ["HTML", "CSS", "Javascript"],
      desc: "My first project for college. Fotoin is frontend web without any framework inside it just pure html, css, and js for training.",
      link: "https://github.com/Dapoodap/Joki_Fotoin",
    },
    {
      title: "Skilmovie Website",
      img: movie,
      tools: ["HTML", "CSS", "Boostrap", "Javascript", "Asyncrhonous"],
      desc: "Responsive website for movies lover. Using TMDB API, website fetch the movie asynchrnously.",
      link: "https://github.com/Dapoodap/skilmovieApp",
    },
    {
      title: "Poliklinik Website",
      img: poli,
      tools: ["ReactJs", "Boostrap", "Laravel",],
      desc: "website for polyclinics or health workers such as doctors can make schedules and examine patients who register via the website.",
      link: "https://github.com/Dapoodap/BK_POLIKLINIK_FE",
    },
    {
      title: "Todolist React",
      img: todo,
      tools: ["React js", "Redux", "Boostrap", "TMDB API"],
      desc: "TODO List for user can ease managing their life with structured and well organized note. This project implementing redux for state management",
      link: "https://github.com/Dapoodap/TodoListReact",
    },
    {
      title: "Personal website Mk.1",
      img: personal1,
      tools: ["HTML", "CSS", "Boostrap", "Javascript"],
      desc: "My first personal website withou any framework and try to make it accessible for everyone.",
      link: "https://github.com/orgs/FEBE13/PersonalWeb",
    },
    {
      title: "Personal website Mk.2",
      img: personal2,
      tools: ["React js", "boostrap"],
      desc: "My second personal website withou ReactJs. Im improved the features and try make it nice with react boostrap",
      link: "https://github.com/orgs/FEBE13/personalWeb2",
    },
    {
      title: "Palindrom Generator",
      img: pali,
      tools: ["HTML", "CSS", "Javasript"],
      desc: "Fun project using implementation of javascript for improving logical and problem solving. This project will detect either the input word is palindrom or not",
      link: "https://github.com/orgs/FEBE13/PalindromGenerator",
    },
    {
      title: "WRC Landing Page",
      img: wrc,
      tools: ["HTML", "CSS"],
      desc: "Slicing the landing page for web development pemula in skilvul course without any framework used",
      link: "https://github.com/orgs/FEBE13/WRC_Landing_Page",
    },
    {
      title: "BMI Calculator",
      img: bmi,
      tools: ["HTML", "CSS"],
      desc: "Fun project using implementation of javascript for improving logical and problem solving. This project will calculate the user BMI status from their weight and height",
      link: "https://github.com/orgs/FEBE13/BMIcalculator",
    },
    {
      title: "Restfull API For BAtikfy",
      img: docapi,
      tools: ["Expressjs", "MySql", "JWT"],
      desc: "Made restAPI and documented the API for Batikfy application. Batikfy is me and my team capstone for bangkit program. The application can detect batik pattern with machine learning approach.",
      link: "https://github.com/orgs/BATIKFY/repositories",
    },
  ];
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <Navigation />
      <Section1 />
      <Container className="my-4">
        <motion.div
        variants={fadeinandout}
        initial="initial"
        whileInView="animate"
        viewport={{ 
          once:true
         }}
        className="my-2" style={{ maxWidth: "90%", margin: "auto" }}>
          <img src={logo} width={60} alt="" />
          <h2>My Project</h2>
        </motion.div>
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
                variants={card}
  initial="initial"
  whileInView="animate"
  viewport={{ 
    once:true
   }}
   custom={index}
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
                      {item.desc}
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
