import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import "./Logins.scss";
import VideoPlayer from "./VideoPlayer";

// interface FormData {
//   name: string;
//   email: string;
//   password: string;
// }

function Login() {

  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let res = await axios.post("http://localhost:8080/api/auth/login", formData);
      console.log("done", res)

    } catch (error) {
      console.log(event);
    }
  };

  return (<>
    <div className="login-container">
      <VideoPlayer />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <button className="login-button" onClick={() => navigate('/register')}>
          Register
        </button>
      </form>

    </div>
  </>
  );
}

export default Login;
