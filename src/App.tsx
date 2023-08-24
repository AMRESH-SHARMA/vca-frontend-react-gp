import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import CompanyForm from './pages/register/CompanyForm'
import CarDetails from './pages/carDetails/CarDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/furtherregister" element= { <CompanyForm/>} />
            <Route path="/car-details/:id" element= { <CarDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
