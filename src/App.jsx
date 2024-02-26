import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Aboutme from './pages/Aboutme'
import EduExp from './pages/EduExp'
import Porto from './pages/Porto'

function App() {


  return (
    <>
    <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/about' element={<Aboutme/>}/>
      <Route exact path='/eduexp' element={<EduExp/>}/>
      <Route exact path='/porto' element={<Porto/>}/>
    </Routes>
    </>
  )
}

export default App
