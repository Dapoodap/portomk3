import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { easeInOut, motion } from 'framer-motion';


function Banner() {
    const colors = ['#001eff', '#f000ff', '#ffe700', '#37013a']; // Warna yang akan digunakan
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);

  const fadeinandout ={
    initial: { opacity: 0},
    animate: { opacity:1,transition:{duration:1.5,ease:easeInOut,delay:0.5}}
  }
  return (
    <Container className="banner w-100 vh-100 d-flex justify-content-center align-items-center" fluid>
        <div className="my-5" style={{ padding: '20px' }}>
          <motion.div
          variants={fadeinandout}
          initial="initial"
          whileInView="animate"
          // viewport={{ 
          //   once:true
          //  }}
          className="p-4" style={{ maxWidth: '800px' }}>
            <motion.p
            initial={{ x:-100 }}
            animate={{ x:0 ,transition:{ duration:1.5}}}
            style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '2px' }}>Hi, My Name Is </motion.p>
            <motion.h1
            initial={{ x:-100 }}
            animate={{ x:0 ,transition:{ duration:1.5}}}
             style={{ fontSize: '65px', fontWeight: '600', letterSpacing: '2px' }}>
              Daffa{' '}
              <motion.span
                style={{ color: colors[index] }}
                animate={{ color: colors[index] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                Radhitya.
              </motion.span>
            </motion.h1>
            <motion.h1
             initial={{ x:100 }}
             animate={{ x:0 ,transition:{ duration:1.5}}}
            style={{ fontSize: '65px', fontWeight: '600', letterSpacing: '2px' }}>I make websites.</motion.h1>
            <motion.p
             initial={{ x:100 }}
             animate={{ x:0 ,transition:{ duration:1.5}}}
            style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '2px' }}>
              Fullstack Developer Based In Semarang | Junior Developer | <a href="#">Github</a> | <a href="#">Linkedin</a>
            </motion.p>
          </motion.div>
        </div>
      </Container>
  )
}

export default Banner