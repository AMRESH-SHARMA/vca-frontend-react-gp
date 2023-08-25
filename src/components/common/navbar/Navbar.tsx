// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {

  const navigate = useNavigate()
  // const [show, setShow] = useState<boolean>(true)
  // const handleShow = () => {
  //   setShow(!show)
  // }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="icon">
          {/* <i className="fa fa-shopping-cart"></i> */}
        </div>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li className="nav-link" onClick={() => navigate('/')}>Home</li>
          <li className="nav-link" onClick={() => navigate('/login')}>Login</li>
          <li className="nav-link" onClick={() => navigate('/register')}>Register</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar