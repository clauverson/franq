import { useFormik } from 'formik'
import { Input } from '../../../../components/shared/input'
import { Button } from '../../../../components/shared/button'
import logo from '../../../../assets/images/logo.svg'
import { useAuthStore } from '../../../../hooks/auth.store'
import { useNavigate } from 'react-router'

export function LoginPage() {
  const navigate = useNavigate()

  const { login } = useAuthStore()

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }, options) => {
      const currentUser = login(email, password)

      if (typeof currentUser === 'string') {
        options.setFieldError('email', currentUser)
      } else {
        navigate('/')
      }
    },
  })

  return (
    <main className="grid">
      <header className="mb-8 grid gap-4">
        <img src={logo} alt="Logo" className="w-48 mx-auto" draggable={false} />
        <h4 className="text-center">Acesse sua conta</h4>
      </header>

      <form onSubmit={form.handleSubmit} className="grid gap-2">
        <div>
          <label htmlFor="email" className="text-sm">
            E-mail
          </label>
          <Input
            id="email"
            name="email"
            onChange={form.handleChange}
            type="email"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm">
            Senha
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={form.handleChange}
          />
        </div>

        <footer className="mt-6 text-center">
          <Button type="submit">Entrar</Button>

          <hr className="my-6 text-slate-200" />

          <p className="text-sm text-slate-700">Ainda não tem uma conta?</p>
          <a
            className="text-teal-700 underline underline-offset-2"
            href="/auth/register"
          >
            Cadastre-se aqui
          </a>
        </footer>
      </form>
    </main>
  )
}
