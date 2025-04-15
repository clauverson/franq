import { Outlet, useNavigate } from 'react-router'
import { useAuthStore } from '../../../hooks/auth.store'
import { useEffect } from 'react'

export function AuthLayout() {
  const navigate = useNavigate()
  const { loadUser } = useAuthStore()

  useEffect(() => {
    const user = loadUser()
    if (user) {
      navigate('/')
    }
  }, [])

  return (
    <section className="relative min-h-screen grid place-items-center">
      <div className="auth-bg-pattern" />

      <div className="z-10 bg-white p-10 shadow-xl rounded-lg">
        <Outlet />
      </div>
    </section>
  )
}
