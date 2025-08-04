import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import  {Home}  from './pages/Home'
import {Lugares} from './pages/Lugares'




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lugares' element={<Lugares />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
