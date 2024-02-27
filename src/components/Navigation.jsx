import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion'; // Import framer motion
import { Link } from 'react-router-dom';

function Navigation() {
  const [active, setActive] = useState(false);

  const ChangeActive = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 90) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener('scroll', ChangeActive);

  // Variabel untuk animasi framer motion
  const brandVariants = {
    // Keyframes untuk animasi loncat-loncat
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0], // Mengubah posisi secara vertikal dengan animasi loncat-loncat
      transition: {
        duration: 1.5, // Durasi setiap siklus animasi
        repeat: Infinity, // Mengulang animasi secara terus-menerus
        ease: "easeInOut", // Easing function untuk membuat animasi terasa lebih mulus
      },
    },
  };

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className={active ? 'nav py-3  fixed-top ' : 'py-3 fixed-top'}>
          <Container>
            {/* Gunakan motion.div untuk menerapkan animasi */}
            <motion.div
              variants={brandVariants} // Gunakan variabel animasi yang sudah didefinisikan sebelumnya
              initial="initial" // State awal animasi
              animate="animate" // State akhir animasi
            >
              
              <Navbar.Brand style={{color:'#3d2546',fontFamily:'Grandstander,cursive', fontSize: '35px', fontWeight: '600', letterSpacing: '1px' }} href="#">
              <Link style={{ textDecoration: 'none',color:'#3d2546',fontFamily:'Grandstander,cursive', fontSize: '35px', fontWeight: '600', letterSpacing: '1px' }} to={'/'}>{"<Daffa/>"}</Link>
              </Navbar.Brand>
            </motion.div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            style={{ backgroundColor:'#ca87fa',lineHeight:'30px' }}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <p style={{color:'#3d2546',fontFamily:'Grandstander,cursive', fontSize: '35px', fontWeight: '600', letterSpacing: '1px' }}>{"<Daffa/>"}</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mx-auto">
                  <Nav.Link className="navlink" style={{ color:'black',fontSize: '20px', fontWeight: '500', letterSpacing: '2px' }}><Link className='link' style={{ textDecoration: 'none'}} to={'/about'}>About</Link></Nav.Link>
                  <Nav.Link className="navlink" style={{ fontSize: '20px', fontWeight: '500', letterSpacing: '2px' }}><Link className='link' style={{ textDecoration: 'none'}} to={'/eduexp'}>Education and Experience</Link></Nav.Link>
                  <Nav.Link className="navlink" style={{ fontSize: '20px', fontWeight: '500', letterSpacing: '2px' }}><Link className='link' style={{ textDecoration: 'none'}} to={'/porto'}>Portofolio and Project</Link></Nav.Link>
                </Nav>
                <a href="https://drive.google.com/drive/folders/1ItWNgmq3qskziO_sOfONKXDeOqaTEZLB?usp=drive_link" target="_blank"><Button className="btn-cv">Download My CV</Button></a>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;
