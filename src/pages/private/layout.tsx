import { Outlet, useNavigate } from 'react-router'
import logo from '../../assets/images/logo.svg'
import { useAuthStore } from '../../hooks/auth.store'
import { useEffect } from 'react'
import { CircleUserRound } from 'lucide-react'

export function PrivateLayout() {
  const navigate = useNavigate()

  const { loadUser, user: currentUser, logout } = useAuthStore()

  useEffect(() => {
    const user = loadUser()
    if (!user) {
      navigate('/auth/login')
    }
  }, [])

  function handleLogout() {
    logout()
    navigate('/auth/login')
  }

  return (
    <section className="bg-slate-100 h-screen overflow-auto">
      <header className="container mx-auto flex items-center justify-center pt-6">
        <img
          src={logo}
          className="cursor-pointer h-5 grow"
          alt="Desafio Técnico Frontend"
          draggable="false"
          onClick={() => navigate('/')}
        />
        <aside>
          {currentUser && (
            <div className="flex items-center gap-2">
              <CircleUserRound size={20} />
              <span>{currentUser.name ?? currentUser.email}</span>
              <span>|</span>
              <button
                className="cursor-pointer hover:text-rose-700"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          )}
        </aside>
      </header>

      <Outlet />
    </section>
  )
}
