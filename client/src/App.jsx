import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import NotFound from './pages/NotFound'
import Support from './pages/Support';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/support" element={<Support />} />
      </Routes>
  )
}

export default App
