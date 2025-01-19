import { useNavigate } from 'react-router-dom'

    export default function Home() {
      const navigate = useNavigate()

      return (
        <div className="min-h-screen bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-100 mb-4">
        Find Your Perfect Student Accommodation
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Connecting students with verified hostel owners across India
      </p>

      {/* Search Section */}
      <div className="max-w-md mx-auto space-y-4">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by location or institute..."
          />
          <button className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Main Navigation Buttons */}
        <button
          onClick={() => navigate('/hostels')}
          className="w-full bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700"
        >
          Browse All Hostels
        </button>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="w-full bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700"
          >
            Profile
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-yellow-600 text-white px-4 py-3 rounded-md hover:bg-yellow-700"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate('/properties/new')}
            className="w-full bg-pink-600 text-white px-4 py-3 rounded-md hover:bg-pink-700"
          >
            Add Property
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    }
