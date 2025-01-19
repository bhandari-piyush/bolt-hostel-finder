import { useState, useEffect } from 'react'
    import { auth } from '../firebase'

    export default function Profile() {
      const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'student',
        institute: '',
        address: ''
      })

      useEffect(() => {
        const user = auth.currentUser
        if (user) {
          setProfile(prev => ({
            ...prev,
            name: user.displayName || '',
            email: user.email || '',
            phone: user.phoneNumber || ''
          }))
        }
      }, [])

      const handleSubmit = async (e) => {
        e.preventDefault()
        // Save profile logic
      }

      return (
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    value={profile.role}
                    onChange={(e) => setProfile({...profile, role: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="student">Student</option>
                    <option value="owner">Hostel Owner</option>
                  </select>
                </div>

                {profile.role === 'student' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Institute
                    </label>
                    <input
                      type="text"
                      value={profile.institute}
                      onChange={(e) => setProfile({...profile, institute: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                )}

                {profile.role === 'owner' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Business Address
                    </label>
                    <input
                      type="text"
                      value={profile.address}
                      onChange={(e) => setProfile({...profile, address: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    }
