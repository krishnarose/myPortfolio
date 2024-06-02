import './App.css'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import Page404 from './Pages/Page404'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'

function App() {
 

  return (
    <>
   <BrowserRouter>
       < Navbar/>
        <Routes>
          <Route path="/*" element={<Page404 />} />
          <Route path="/" element={<Home />} />

          
        </Routes>
       
      </BrowserRouter>
    

     
    </>
  )
}

export default App
