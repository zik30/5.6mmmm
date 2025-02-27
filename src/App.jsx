
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Slider1 from './pages/Slider1'
import Slider2 from './pages/Slider2'
import Slider3 from './pages/Slider3'
import Slider4 from './pages/Slider4'
import Slider5 from './pages/Slider5'
import MenuComp from './components/MenuComp'

function App() {

  return (
    <>
      <MenuComp/>
      <Routes>
        <Route path='/slider1' element={<Slider1/>}/>
        <Route path='/slider2' element={<Slider2/>}/>
        <Route path='/slider3' element={<Slider3/>}/>
        <Route path='/slider4' element={<Slider4/>}/>
        <Route path='/slider5' element={<Slider5/>}/>
      </Routes>
      
    </>
  )
}

export default App
