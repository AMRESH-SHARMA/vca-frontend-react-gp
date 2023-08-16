import { NavLink } from 'react-router-dom'
// import './Navbar.css';
import { logo } from '../assets/icons/index'
import { rowdash } from '../assets/icons'

const Navbar = () => {
  let activeStyle = {
    border: 'none',
    borderRadius: '0px',
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#1c69d4',
    marginBottom: '0px',
    paddingBottom: '0px'
  }
  let unActiveStyle = {
    marginBottom: '0px',
    paddingBottom: '0px'
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg topnav"
        style={{ padding: '0px' }}
      >
        <div className="container-fluid" style={{ padding: '0px' }}>
          <NavLink to="/" className="navbar-brand">
            <img alt="" src={logo} height="42px" width="160px" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img alt="" src={rowdash} height="30px" width="30px" />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive ? activeStyle : unActiveStyle
                  }
                  className="topnavItem"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) =>
                    isActive ? activeStyle : unActiveStyle
                  }
                  className="topnavItem"
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  style={({ isActive }) =>
                    isActive ? activeStyle : unActiveStyle
                  }
                  className="topnavItem"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  style={({ isActive }) =>
                    isActive ? activeStyle : unActiveStyle
                  }
                  className="topnavItem"
                >
                  Custom services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  style={({ isActive }) =>
                    isActive ? activeStyle : unActiveStyle
                  }
                  className="topnavItem"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
