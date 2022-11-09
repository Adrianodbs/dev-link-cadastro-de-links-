import { useState, useEffect } from 'react'

import { auth } from '../services/firebaseconnection'
import { onAuthStateChanged } from 'firebase/auth'

import { Navigate } from 'react-router-dom'

function Private({ children }) {
  const [loading, setLoading] = useState(true)
  const [signed, setSigned] = useState(false)

  if (loading) {
    return <div></div>
  }

  if (!signed) {
    return <Navigate to="/login" />
  }

  return children
}

export default Private
