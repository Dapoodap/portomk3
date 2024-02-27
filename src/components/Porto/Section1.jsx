import { Container } from 'react-bootstrap'
import { easeInOut, motion } from "framer-motion";
function Section1() {
  const fadeinandout = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5, ease: easeInOut } },
  };
  // const card = {
  //   initial: { y:-100 },
  //   animate:(index)=>({
  //     y:0,
  //     transition:{
  //       duration: 1.5,
  //       delay: 0.1 * index,
  //     },
  //   }),
  // };
  return (
    <Container
        fluid
        style={{
          backgroundColor: "#87cefa",
          height: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
        variants={fadeinandout}
        initial="initial"
        whileInView="animate"
        viewport={{ 
          once:true
         }}
        >
          <h1 style={{ fontSize:'30px',fontWeight:'500',letterSpacing:'2px',wordSpacing:'2px',fontFamily:'"Bevan", serif' }}>My Portofolio</h1>
        </motion.div>
      </Container>
  )
}

export default Section1