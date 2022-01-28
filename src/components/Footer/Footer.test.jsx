import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './Footer.jsx'

it('renders footer component', () => {
  const { container } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})
