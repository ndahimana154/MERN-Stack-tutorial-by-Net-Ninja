import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
      const response = await fetch("http://localhost:3300/api/users/signup/", {
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
        console.log("Account created successfully.");
        window.location.href = "/";
      } else {
        setError(json.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="create" onSubmit={handleSignup}>
      <h3>Create your account</h3>
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
      <button>Signup</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default Signup;
