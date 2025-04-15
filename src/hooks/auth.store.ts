import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Props {
  user: {
    name: string
    email: string
    password: string
  } | null
}

interface Actions {
  createUser: (user: Props['user']) => Props['user'] | string
  loadUser: () => Props['user'] | null
  login: (email: string, password: string) => Props['user'] | string
  logout: () => void
}

export const useAuthStore = create(
  immer<Props & Actions>((set) => {
    return {
      user: null,

      createUser: (user: Props['user']) => {
        if (!user?.email && !user?.password) {
          return 'Usuário inválido'
        }

        const userExists = localStorage.getItem(user.email)
        if (userExists) {
          return 'Usuário inválido'
        }

        localStorage.setItem(user.email, JSON.stringify(user))
        localStorage.setItem('currentUser', JSON.stringify(user))
        set({ user })
        return user
      },

      loadUser: () => {
        const user = localStorage.getItem('currentUser')
        if (user) {
          const parsedUser = JSON.parse(user)
          set({ user: parsedUser })
          return parsedUser
        }
        return null
      },

      login: (email: string, password: string) => {
        const user = localStorage.getItem(email)
        if (!user) {
          return 'Usuário inválido'
        }

        const parsedUser = JSON.parse(user)
        if (parsedUser.password !== password) {
          return 'Usuário inválido'
        }

        localStorage.setItem('currentUser', JSON.stringify(parsedUser))
        set({ user: parsedUser })
        return parsedUser
      },

      logout: () => {
        localStorage.removeItem('currentUser')
        set({ user: null })
      },
    }
  })
)
