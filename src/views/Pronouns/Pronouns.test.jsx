//npm i msw before starting tests
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import Pronouns from './Pronouns'
import { GuideProvider } from '../../context/GuideContext/GuideContext'

const url = process.env.SUPABASE_URL + '/rest/v1'

let mockResponse = [{title: 'blahblah', animal:'dog', image:'testURL'}]

const server = setupServer(
    rest.get(url + '/cards', (req, res, ctx) => {
       return res(
           ctx.json(mockResponse)
       ) 
    })
)

describe('Pronouns List', () => {
    beforeAll(() => {
        server.listen()
    })
    afterAll(() => {
        server.close()
    })
    it('should render the pronouns cards', async () => {
        render(
            <GuideProvider>
            <ProvideAuth>
            <DeckProvider>
            <MemoryRouter initialEntries={['/pronouns']}>
                <Pronouns />
            </MemoryRouter>
             </DeckProvider>
             </ProvideAuth>
             </GuideProvider>
        )
        await screen.findByText('blahblah')
    });

    it('when on the Pronouns page - should render the Pronouns guide text message', async() => {
      render(
        <MemoryRouter initialEntries={['/pronouns']}>
          <DeckProvider>
            <GuideProvider>
                <Pronouns />
            </GuideProvider>
          </DeckProvider>
        </MemoryRouter>
      );
    
      const guideText = "This is the Pronoun Deck - click on a card to find out more! Visit all of my friends for a colorful surprise :)"
    
      await waitFor(() => screen.findByText(guideText));
    });  
})
