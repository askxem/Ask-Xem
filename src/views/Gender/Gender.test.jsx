import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import Gender from './Gender'
import { GuideProvider } from '../../context/GuideContext/GuideContext'

const url = process.env.SUPABASE_URL + '/rest/v1'

let mockResponse = [{title: 'thisisdope', animal:'dog', image:'URL'}]

const server = setupServer(
    rest.get(url + '/cards', (req, res, ctx) => {
       return res(
           ctx.json(mockResponse)
       ) 
    })
)

describe('Gender List', () => {

    beforeAll(() => {
        server.listen()
    })
    afterAll(() => {
        server.close()
    })

    it.skip('should render the gender cards', async () => {
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
        await screen.findByText('thisisdope')
    }); 
    
    it('should render the Gender guide text message', async() => {
        render(
            <GuideProvider>
              <DeckProvider>
                  <MemoryRouter initialEntries={['/gender']}>
                      <Gender />
                  </MemoryRouter>
                </DeckProvider>
            </GuideProvider>
        );

      const guideText = "This is the Gender Deck - click on a card to find out more! Visit all of my friends for a colorful surprise :)"

      await waitFor(() => screen.findByText(guideText));
    }); 
});


