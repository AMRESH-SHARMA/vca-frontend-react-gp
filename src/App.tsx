import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
