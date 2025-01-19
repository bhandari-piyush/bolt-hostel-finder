import { useState } from 'react'
    import { Link } from 'react-router-dom'
    import { getHostelImage } from '../utils/imageService'

    const mockProperties = [
      {
        id: 1,
        name: 'Green Valley Hostel',
        location: 'Near IIT Delhi',
        status: 'Active',
        rooms: 20,
        occupied: 15,
        revenue: 120000
      },
      {
        id: 2,
        name: 'Blue Sky PG',
        location: 'Near DTU',
        status: 'Inactive',
        rooms: 15,
        occupied: 5,
        revenue: 40000
      }
    ].map(property => ({
      ...property,
      image: getHostelImage(property.id)
    }))

    export default function OwnerDashboard() {
      const [properties, setProperties] = useState(mockProperties)

      return (
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">My Properties</h1>
              <Link
                to="/properties/new"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add New Property
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map(property => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>Location: {property.location}</div>
                      <div>Status: 
                        <span className={`ml-1 px-2 py-1 rounded-full text-xs font-medium ${
                          property.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {property.status}
                        </span>
                      </div>
                      <div>Rooms: {property.rooms} ({property.occupied} occupied)</div>
                      <div>Monthly Revenue: ₹{property.revenue}</div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Link
                        to={`/properties/${property.id}`}
                        className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Manage
                      </Link>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                        View Stats
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
