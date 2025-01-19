import { useNavigate } from 'react-router-dom'

    export default function HostelCard({ hostel }) {
      const navigate = useNavigate()

      const handleClick = () => {
        navigate(`/hostels/${hostel.id}`)
      }

      return (
        <div 
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          onClick={handleClick}
        >
          <img 
            src={hostel.image}
            alt={hostel.name}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{hostel.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <span>{hostel.location}</span>
              <span>•</span>
              <span>{hostel.distance} km from institute</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold">₹{hostel.price}</span>
                <span className="text-sm text-gray-600">/month</span>
              </div>
              <button 
                onClick={handleClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )
    }
