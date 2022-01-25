import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import GenderDetail from './GenderDetail'
import { GuideProvider } from '../../context/GuideContext/GuideContext'

const urlCards = process.env.SUPABASE_URL + '/rest/v1'

let mockCard = [{ id: 2, title: 'awesomesauce', definition: 'this is a card', source: 'cardURL', image: 'llama' }]

const serverCard = setupServer(
    rest.get(urlCards + '/cards', (req, res, ctx) => {
        return res(
            ctx.json(mockCard)
        )
    })
)

const urlFavs = process.env.SUPABASE_URL + '/rest/v1'
let mockFavs = [{ id: 2, card_id: 2, user_id: 2 }]


const serverFav = setupServer(
    rest.get(urlFavs + '/favs', (req, res, ctx) => {
        return res(
            ctx.json(mockFavs)
        )
    })
)

describe('Gender Detail', () => {
    beforeAll(() => {
        serverCard.listen()
        serverFav.listen()
    })
    afterAll(() => {
        serverCard.close()
        serverFav.close()
    })
    it('should render gender details', async () => {
        render(
            <GuideProvider>
                <ProvideAuth>
                    <DeckProvider>
                        <MemoryRouter initialEntries={['/gender/2']}>
                            <GenderDetail />
                        </MemoryRouter>
                    </DeckProvider>
                </ProvideAuth>
            </GuideProvider>
        )
        screen.getByLabelText(/loading./i)
        await screen.findByText('awesomesauce')
    })
})
