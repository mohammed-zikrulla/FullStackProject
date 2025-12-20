import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetCurrentUser } from '../apiCalls/users';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function ProtectedRoute({children}) {
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    const getValidUser =async ()=>{
      const response = await GetCurrentUser();
      setUser(response.data.data);
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            getValidUser();
        }
        else{
            navigate('/register');
        }
    }, []);
  return (
    <div>{children} {user.name}</div>
  )
}

export default ProtectedRoute