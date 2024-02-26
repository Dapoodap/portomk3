import { useEffect } from "react"
import Section1 from "../components/EduExp/Section1"
import Section2 from "../components/EduExp/Section2"
import Section3 from "../components/EduExp/Section3"
import Navigation from "../components/Navigation"

function EduExp() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <Navigation/>
    <Section1/>
    <Section2/>
    <Section3/>
    </>
  )
}

export default EduExp