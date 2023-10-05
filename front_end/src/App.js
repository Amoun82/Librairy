import { useEffect } from 'react';
import './App.css';
import Login from './assets/login';
import { useCookies } from 'react-cookie';



function App() {
  const [cookies, setCookie] = useCookies(['auth', false]);

  return (
    <div className="App">
      {cookies && console.log(cookies)}
      {cookies.auth && <h1>Hello {cookies.auth}!</h1>}
      {/* <Login /> */}
    </div>
  );
}

export default App;
