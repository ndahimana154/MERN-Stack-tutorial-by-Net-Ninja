import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await fetch("http://localhost:3300/api/users/login/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (response.status == 200) {
        setEmail("");
        setPassword("");
        setError("");
        const token = json.token;
        const userId = json._id;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        console.log("Login succed.");
        window.location.href = "/";
      } else {
        setError(json.error );
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form className="create" onSubmit={handleLogin}>
      <h3>Login</h3>
      <label>Email :</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default Login;
