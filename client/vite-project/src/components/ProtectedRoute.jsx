import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("tokends");
        if(token){
            navigate('/home');
        }
        else{
            navigate('/register');
        }
    }, []);
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute