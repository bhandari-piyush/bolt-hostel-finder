import { useState } from 'react'
    import HostelCard from '../components/HostelCard'
    import { getHostelImage } from '../utils/imageService'
    import { mockHostels } from '../data/mockHostels'

    const hostelsWithImages = mockHostels.map(hostel => ({
      ...hostel,
      image: getHostelImage(hostel.id)
    }))

    export default function Hostels() {
      const [search, setSearch] = useState('')
      const [filteredHostels, setFilteredHostels] = useState(hostelsWithImages)

      const handleSearch = (e) => {
        const value = e.target.value.toLowerCase()
        setSearch(value)
        setFilteredHostels(
          hostelsWithImages.filter(hostel => 
            hostel.name.toLowerCase().includes(value) ||
            hostel.location.toLowerCase().includes(value)
          )
        )
      }

      return (
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search hostels by name or location..."
                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHostels.map(hostel => (
                <HostelCard key={hostel.id} hostel={hostel} />
              ))}
            </div>
          </div>
        </div>
      )
    }
