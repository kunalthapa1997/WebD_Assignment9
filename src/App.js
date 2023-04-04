import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './Login/Login';
import About from './Pages/About';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Profile from './Pages/Profile';
import MainPage from './Main/MainPage';

function App({...props}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }
  
  return (
   <Router>
    {isLoggedIn && <MainPage/>}
    <Routes>
      <Route path="/" element={<LoginPage handle={handleLogin}/>}></Route>
      {isLoggedIn && 
      <>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/jobs' element={<Jobs/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      </>
      }
    </Routes>
   </Router> 
  );
}

export default App;
