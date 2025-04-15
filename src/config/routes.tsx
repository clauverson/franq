import { createBrowserRouter } from 'react-router'
import { HomePage } from '../pages/private/dashboard'
import { AuthLayout } from '../pages/public/auth/layout'
import { PrivateLayout } from '../pages/private/layout'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <div>Login</div>,
      },
      {
        path: 'register',
        element: <div>Register</div>,
      },
    ],
  },
])
