// import React, { useState } from "react";
// import axios from "axios";
// import "./Logins.css"; // Import your CSS file for styling
// import VideoPlayer from "./VideoPlayer"; 

// function LoginPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {

//       await axios.post("http://localhost:8080/api/v1/login", formData);
//       alert("Login Successful");
//     } catch (error) {
//       alert("Login Failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <VideoPlayer />
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
      
//     </div>
//   );
  
// }

// export default LoginPage;