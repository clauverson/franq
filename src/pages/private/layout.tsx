import { Outlet, useNavigate } from 'react-router'
import logo from '../../assets/images/logo.svg'

export function PrivateLayout() {
  const navigate = useNavigate()

  return (
    <section className="bg-slate-100 h-screen overflow-auto">
      <header className="container mx-auto flex items-center justify-center pt-6">
        <img
          src={logo}
          className="cursor-pointer h-5"
          alt="Desafio Técnico Frontend"
          draggable="false"
          onClick={() => navigate('/')}
        />
      </header>
      <Outlet />
    </section>
  )
}
