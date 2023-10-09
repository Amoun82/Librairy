import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home";


import { useEffect } from 'react';
import './App.css';
import Login from './assets/login';
import { useCookies } from 'react-cookie';



function App() {
  const [cookies, setCookie] = useCookies(['auth', false]);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
