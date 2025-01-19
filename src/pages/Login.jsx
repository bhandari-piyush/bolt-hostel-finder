import { useState } from 'react'
    import { auth, googleProvider, signInWithPopup } from '../firebase'

    export default function Login() {
      const [phone, setPhone] = useState('')
      const [otpSent, setOtpSent] = useState(false)

      const handleGoogleLogin = async () => {
        try {
          await signInWithPopup(auth, googleProvider)
          // Handle successful login
        } catch (error) {
          console.error('Google login error:', error)
        }
      }

      const handlePhoneLogin = async () => {
        // Implement OTP logic here
        setOtpSent(true)
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h2>
            <div className="space-y-4">
              <button 
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              {otpSent ? (
                <div>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    placeholder="Enter OTP"
                  />
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Verify OTP
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handlePhoneLogin}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Get OTP
                </button>
              )}
            </div>
          </div>
        </div>
      )
    }
