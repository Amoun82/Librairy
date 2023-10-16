import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import Profil from "./pages/profil";

import './App.css';
import { useState } from "react";
import { HasAuthenticated } from "./services/AuthApi";
import Auth from './contexts/Auth';
import AuthenticatedRoute from "./components/AuthenticateRoute";
import Register from "./pages/register";
import Login from './pages/login';
import LogOut from "./components/account/logOut";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(HasAuthenticated())

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />

            <Route path="/profil" element={<Profil />} />
          </Route>
        </Routes>
      </Router>
    </Auth.Provider>
  );
}

export default App;
