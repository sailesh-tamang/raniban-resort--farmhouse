import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Contact } from './pages/Contact'
import { AboutUs } from './pages/AboutUs'
import { Services } from './pages/services'
import { BookNow } from './pages/BookNow'

function App() {
  return (
    <div >
      <Navbar />
      <div style={{  }}> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path = '/about' element={<AboutUs />} />
            <Route path = '/services' element={<Services />} />
            <Route path = '/booknow' element={<BookNow />} />
            
            
          
          </Routes>
        </div>
      </div>
  )
}

export default App
