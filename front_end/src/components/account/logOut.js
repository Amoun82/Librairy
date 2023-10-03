import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';


const LogOut = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  localStorage.clear() ;

  useEffect(()=>{
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    })
    queryClient.clear() ;
    navigate('/');

  })
  return (
    <>
    </>
  )
}

export default LogOut