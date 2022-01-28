import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import { ProvideAuth } from '../../context/AuthContext.jsx'
import { GuideProvider } from '../../context/GuideContext/GuideContext.jsx'
import Login from '../Auth/Login.jsx'
import Signup from '../Auth/Signup.jsx'
import Select from '../Select/Select.jsx'
import Home from './Home.jsx'

jest.mock('../../context/AuthContext.jsx')

describe('tests home behavior', () => {
  it('redirects user to login page on click of login link', () => {
    render(
      <ProvideAuth>
        <MemoryRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </MemoryRouter>
      </ProvideAuth>
    )

    const loginLink = screen.getByRole('link', { name: 'Login' })

    fireEvent.click(loginLink)

    screen.getAllByLabelText(/password/i)
    screen.getByRole('button', { name: 'Login' })
  })

  it('redirects user to signup page on click of login link', () => {
    render(
      <ProvideAuth>
        <MemoryRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </MemoryRouter>
      </ProvideAuth>
    )

    const signupLink = screen.getByRole('link', { name: 'Signup' })

    fireEvent.click(signupLink)

    screen.getAllByLabelText(/password/i)
    screen.getByRole('button', { name: 'Create Account' })
  })

  it('redirects user to select page on click of continue as guest link, with two disabled guest inputs', () => {
    render(
      <ProvideAuth>
        <GuideProvider>
          <MemoryRouter>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/select">
              <Select />
            </Route>
          </MemoryRouter>
        </GuideProvider>
      </ProvideAuth>
    )

    const guestLink = screen.getByRole('link', { name: 'Continue as Guest' })

    fireEvent.click(guestLink)

    screen.getByAltText(/bunny/i)
    screen.getByAltText(/axolotl/i)
    screen.getByAltText(/lion/i)
    screen.getAllByRole('radio')
  })

  it('renders a link to select page if user exists in context that redirects user to select page on click', () => {
    render(
      <ProvideAuth mockUser={{ id: 20 }}>
        <GuideProvider>
          <MemoryRouter>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/select">
              <Select />
            </Route>
          </MemoryRouter>
        </GuideProvider>
      </ProvideAuth>
    )

    const goLink = screen.getByRole('link', { name: "Let's Go!" })

    fireEvent.click(goLink)

    screen.getByAltText(/bunny/i)
    screen.getByAltText(/axolotl/i)
    screen.getByAltText(/lion/i)
    screen.getAllByRole('radio')
  })
})
