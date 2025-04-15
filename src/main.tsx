import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './config/axios'
import './assets/styles.css'
import { RouterProvider } from 'react-router'
import { routes } from './config/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-loading-skeleton/dist/skeleton.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </StrictMode>
)
