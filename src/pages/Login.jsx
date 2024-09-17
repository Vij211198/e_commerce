import React, { useState } from "react";
import './register.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic here
    console.log("Logged in with: ", { email, password });
  };

  return (
    <div className="login ">
      <h2 style={{alignItems: "center", textAlign:"center", }}>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
