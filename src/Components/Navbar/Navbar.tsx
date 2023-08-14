import { NavLink } from 'react-router-dom'

const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
      <NavLink to="/contact">
        <p>Contact Us</p>
      </NavLink>
    </>
  )
}

export default Navbar
