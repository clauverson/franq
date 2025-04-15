import { useFormik } from 'formik'
import { Input } from '../../../../components/shared/input'
import { Button } from '../../../../components/shared/button'
import logo from '../../../../assets/images/logo.svg'
import { useAuthStore } from '../../../../hooks/auth.store'
import { useNavigate } from 'react-router'

export function SignUpPage() {
  const navigate = useNavigate()

  const { createUser } = useAuthStore()

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: ({ name, email, password }, options) => {
      const saveUser = createUser({ name, email, password })

      if (typeof saveUser === 'string') {
        options.setFieldError('email', saveUser)
      } else {
        navigate('/')
      }
    },
  })

  return (
    <main className="grid">
      <header className="mb-8 grid gap-4">
        <img src={logo} alt="Logo" className="w-48 mx-auto" draggable={false} />
        <h4 className="text-center">Cadastre-se</h4>
      </header>

      <form onSubmit={form.handleSubmit} className="grid gap-2">
        <div>
          <label htmlFor="name" className="text-sm">
            Nome
          </label>
          <Input id="name" name="name" onChange={form.handleChange} />
        </div>

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
          <Button type="submit">Enviar</Button>

          <hr className="my-6 text-slate-200" />

          <p className="text-sm text-slate-700">Já tem um conta?</p>
          <a
            className="text-teal-700 underline underline-offset-2"
            href="/auth/login"
          >
            Acesse aqui
          </a>
        </footer>
      </form>
    </main>
  )
}
