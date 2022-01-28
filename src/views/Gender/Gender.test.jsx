import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import Gender from './Gender'
import { GuideProvider } from '../../context/GuideContext/GuideContext'

const url = process.env.SUPABASE_URL + '/rest/v1'

let mockResponse = [{ title: 'thisisdope', animal: 'dog', image: 'URL' }]

const server = setupServer(
  rest.get(url + '/cards', (req, res, ctx) => {
    return res(ctx.json(mockResponse))
  })
)

describe('Gender List', () => {
  beforeAll(() => {
    server.listen()
  })
  afterAll(() => {
    server.close()
  })
  it('should render the gender cards', async () => {
    render(
      <GuideProvider>
        <ProvideAuth>
          <DeckProvider>
            <MemoryRouter initialEntries={['/gender']}>
              <Gender />
            </MemoryRouter>
          </DeckProvider>
        </ProvideAuth>
      </GuideProvider>
    )
    screen.getByLabelText(/loading./i)
    await screen.findByText('thisisdope')
  })
})
