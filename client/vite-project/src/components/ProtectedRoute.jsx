import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            navigate('/');
        }
        else{
            navigate('/not-found');
        }
    }, []);
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute