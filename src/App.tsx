import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './pages/About'

import Contact from './pages/Contact'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
