import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const LogOut = () => {
  const navigate = useNavigate();
  localStorage.clear() ;

  useEffect(()=>{
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    })
    navigate('/home');

  })
  return (
    <>
    </>
  )
}

export default LogOut