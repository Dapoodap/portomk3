import{ useEffect } from 'react';
import Navigation from '../components/Navigation';
import Section1 from '../components/Aboutme/Section1';
import blob from '../assets/blob-move.gif';
import blob2 from '../assets/blob2.gif';
import Footer from '../components/Footer';

function Aboutme() {
  useEffect(() => {
    const moveBlob = (e) => {
      const blob1 = document.getElementById('blob1');
      const blob2 = document.getElementById('blob2');
      
      // Menghitung posisi relatif mouse pada window
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      // Menggeser gambar berdasarkan posisi mouse
      blob1.style.transform = `translate(${-mouseX * 50}px, ${-mouseY * 50}px)`;
      blob2.style.transform = `translate(${mouseX * 50}px, ${mouseY * 50}px)`;
    };

    window.addEventListener('mousemove', moveBlob);

    return () => {
      window.removeEventListener('mousemove', moveBlob);
    };
  }, []);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div style={{ position: 'relative' }}>
      <img id="blob1" style={{ position: 'absolute', zIndex: '-1', top: '20%', left: '5%' }} src={blob} alt="" />
      <img id="blob2" style={{ position: 'absolute', zIndex: '-1', bottom: '20%', right: '5%' }} src={blob2} alt="" />
      <Navigation />
      <Section1 />
      <Footer />
    </div>
  );
}

export default Aboutme;
