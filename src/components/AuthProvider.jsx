// src/components/AuthProvider.jsx
import { useState, useEffect } from 'react'
import { auth } from './firebase'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  return children(user)
}
