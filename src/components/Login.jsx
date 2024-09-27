import { useState } from "react";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError("Username/Password is empty");
    } else {
      setError("");

      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <form action="" onSubmit={handleSubmit} className="form">
        <div className="username">
          <label htmlFor="username">Username</label>

          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">
          Login
        </button>
      </form>

      {error && <div className="error">{error}</div>}
    </div>
  );
};
