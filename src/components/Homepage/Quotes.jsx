import {Container } from "react-bootstrap"
import blob from '../../assets/blob.png';
function Quotes() {
  return (
    <Container fluid className="p-5" style={{ position: 'relative', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#87CEFA',overflow:'hidden'}}>
        <img src={blob} alt="blob" width={500} style={{ position: 'absolute', top: '5%', left: '100px',objectFit:'cover'}} />
        <div style={{ width: '80%', maxWidth: '600px', textAlign: 'center', zIndex: '1' }}>
          <h3 style={{ letterSpacing: '1px', fontSize: 'clamp(1rem, 5vw, 2.5rem)', fontWeight: '600', lineHeight: '1.2' }}>THE HAPPY MAN IS THE ONE WITH A HEALTHY BODY, A WEALTHY SOUL AND A WELL-EDUCATED NATURE</h3>
          <h3 style={{ letterSpacing: '2px', fontSize: 'clamp(0.8rem, 3vw, 1.5rem)', fontWeight: '500', marginTop: '1rem' }}>~THALES~</h3>
        </div>
      </Container>
  )
}

export default Quotes