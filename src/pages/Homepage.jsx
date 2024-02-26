import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banner from '../components/Homepage/Banner';
import Previewme from '../components/Homepage/Previewme';
import CardSkill from '../components/Homepage/CardSkill';
import Quotes from '../components/Homepage/Quotes';
import vidback from '../assets/vidback.mp4';

function Homepage() {
  
  const colors = ['#001eff', '#f000ff', '#ffe700', '#37013a']; // Warna yang akan digunakan
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <Navigation />
      <Banner/>
      <Previewme/>
      <CardSkill/>
      <Quotes/>
      <Container fluid className="py-3" style={{height: '90vh', position:'relative',display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'15rem'}}>
        <video loop autoPlay muted style={{ objectFit:'cover',width:'100%',height:'100%',position:'absolute',top:'0',left:'0',zIndex:'-1' }} src={vidback} ></video>
        <div className='text-center' style={{color:'#F8F4EC', letterSpacing:'3px',maxWidth: '60rem', border: '3px solid #F8F4EC', borderRadius: '20px', padding: '30px' }}>
          <h1 className='my-3'>{"Let's Get in Touch "}</h1>
          <Button style={{ maxWidth: '50%' }}>Contact Me </Button>
        </div>
      </Container>
      <Footer/>
    </>
  );
}

export default Homepage;
