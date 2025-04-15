import { createBrowserRouter } from 'react-router'
import { HomePage } from '../pages/private/dashboard'
import { AuthLayout } from '../pages/public/auth/layout'
import { PrivateLayout } from '../pages/private/layout'
import { SignUpPage } from '../pages/public/auth/register'
import { LoginPage } from '../pages/public/auth/login'

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
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <SignUpPage />,
      },
    ],
  },
])
