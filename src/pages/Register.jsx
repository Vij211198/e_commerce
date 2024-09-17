import React, { useState } from "react";
import './register.css'
// import { PiPlaceholder } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    else{
    
      navigate('/')
    }
    // Handle registration logic here
    console.log("Registered with: ", { email, password });
  };

  return (
    <div className="register">
      <h1>Create An Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
           {/* name */}
           <input
          placeholder="Name"
            type="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
          />
          <input

          // email 
          placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* password */}
          <input
          placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value) }
            required
          />

           {/* enter password  */}
           <input
          placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
       
        
        <button type="submit" onClick={navigate}>Create account</button>
      </form>
    </div>
  );
};

export default Register;
