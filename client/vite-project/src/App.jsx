import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import Partner from './pages/Partner'
import User from './pages/User'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route element={<ProtectedRoute />}>
         </Route>
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/partner" element={<ProtectedRoute><Partner /></ProtectedRoute>} />
        <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>} />
        <Route path="/not-found" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
