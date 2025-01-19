import { useParams } from 'react-router-dom'
    import { mockHostels } from '../data/mockHostels'
    import { getHostelImage } from '../utils/imageService'

    export default function HostelDetails() {
      const { id } = useParams()
      const hostel = mockHostels.find(h => h.id === parseInt(id))

      if (!hostel) {
        return <div>Hostel not found</div>
      }

      return (
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={getHostelImage(hostel.id)}
                  alt={hostel.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">{hostel.name}</h1>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-600">{hostel.location}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Price</h3>
                    <p className="text-gray-600">₹{hostel.price} / month</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {hostel.amenities.map((amenity, index) => (
                        <span 
                          key={index}
                          className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Distance</h3>
                    <p className="text-gray-600">{hostel.distance} km from institute</p>
                  </div>
                  <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
