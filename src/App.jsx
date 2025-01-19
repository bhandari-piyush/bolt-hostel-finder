// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Hostels from './pages/Hostels'
import HostelDetails from './pages/HostelDetails'
import OwnerDashboard from './pages/OwnerDashboard'
import PropertyForm from './pages/PropertyForm'
import AuthProvider from './components/AuthProvider'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <AuthProvider>
      {(user) => (
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar user={user} />
            <main className="flex-1 pt-16">
              <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/hostels" element={<Hostels />} />
                <Route path="/hostels/:id" element={<HostelDetails />} />
                <Route path="/dashboard" element={<OwnerDashboard />} />
                <Route path="/properties/new" element={<PropertyForm />} />
                <Route path="/properties/:id" element={<PropertyForm />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      )}
    </AuthProvider>
  )
}

export default App
