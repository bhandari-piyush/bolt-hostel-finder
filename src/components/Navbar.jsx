// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

export default function Navbar({ user }) {
	console.log('user', user)
  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Hostel Finder
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.role === 'owner' && (
                  <>
                    <Link to="/dashboard" className="text-gray-800 hover:text-blue-600">
                      Dashboard
                    </Link>
                    <Link to="/properties/new" className="text-gray-800 hover:text-blue-600">
                      Add Property
                    </Link>
                  </>
                )}
                {user.role === 'student' && (
                  <Link to="/hostels" className="text-gray-800 hover:text-blue-600">
                    Find Hostels
                  </Link>
                )}
                <Link to="/profile" className="text-gray-800 hover:text-blue-600">
                  Profile
                </Link>
                <button
                  onClick={() => auth.signOut()}
                  className="text-gray-800 hover:text-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-800 hover:text-blue-600">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
