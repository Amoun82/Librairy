import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import Profil from "./pages/profil";

import './App.css';
import { useState } from "react";
import { HasAuthenticated } from "./services/AuthApi";
import Auth from './contexts/Auth';
import AuthenticatedRoute from "./components/AuthenticateRoute";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(HasAuthenticated())

  return (
    <Auth.Provider value={{ isAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* <AuthenticatedRoute path="/" element={<Profil />} /> */}
          </Route>
        </Routes>
      </Router>
    </Auth.Provider>
  );
}

export default App;
