import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Login } from "./components/Login";

import { Signup } from "./components/Signup";

import { Checkout } from "./components/Checkout";

import { Logout } from "./components/Logout";

import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
