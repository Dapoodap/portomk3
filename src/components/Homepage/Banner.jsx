import { Container } from "react-bootstrap"
import { easeInOut, motion } from 'framer-motion';


function Banner() {



  const fadeinandout ={
    initial: { opacity: 0},
    animate: { opacity:1,transition:{duration:1.5,ease:easeInOut}},
    
  }
  return (
    <Container className="banner w-100 vh-100 d-flex justify-content-center align-items-center" fluid>
        <div className="my-5" style={{ padding: '20px' }}>
          <motion.div
          variants={fadeinandout}
          initial="initial"
          whileInView="animate"
          viewport={{ 
            once:true
           }}
          className="p-4" style={{ maxWidth: '800px' }}>
            <motion.p
            initial={{ x:-100 }}
            animate={{ x:0 ,transition:{ duration:1.5,delay:1}}}
            viewport={{ 
              once:true
             }}
            style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '2px' }}>Hi, My Name Is </motion.p>
            <motion.h1
            initial={{ x:-100 }}
            animate={{ x:0 ,transition:{ duration:1.5,delay:1}}}
            viewport={{ 
              once:true
             }}
             style={{ fontSize: '65px', fontWeight: '600', letterSpacing: '2px' }}>
              Daffa{' '}
              <span
              style={{ fontFamily:'"Rubik Doodle Shadow", system-ui',color:'#145369'}}
              >
                Radhitya.
              </span>
              
            </motion.h1>
            <motion.h1
             initial={{ x:100 }}
             animate={{ x:0 ,transition:{ duration:1.5,delay:1}}}
             viewport={{ 
              once:true
             }}
            style={{ fontSize: '65px', fontWeight: '600', letterSpacing: '2px' }}>I make websites.</motion.h1>
            <motion.p
             initial={{ x:100 }}
             animate={{ x:0 ,transition:{ duration:1.5,delay:1}}}
             viewport={{ 
              once:true
             }}
            style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '2px' }}>
              Fullstack Developer Based In Semarang | Junior Developer | <a href="https://github.com/Dapoodap/" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/daffapwp/" target="_blank">Linkedin</a>
            </motion.p>
          </motion.div>
        </div>
      </Container>
  )
}

export default Banner