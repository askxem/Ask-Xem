import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import { GuideProvider } from '../../context/GuideContext/GuideContext'
import Favorites from './Favorites'

const url = process.env.SUPABASE_URL + '/rest/v1'

const mockCardResponse = [{ title: 'favorited card', animal: 'sloth', image: 'URL' }]
const mockFavIdResponse = [{ 'card_id': 1 }]

const favsServer = setupServer(
    rest.get(url + '/favs', (req, res, ctx) => { return res(ctx.json(mockFavIdResponse)) }
    ))

const cardsServer = setupServer(
    rest.get(url + '/cards', (req, res, ctx) => { return res(ctx.json(mockCardResponse)) }
    ))

describe('Favorites view', () => {
    beforeAll(() => {
        favsServer.listen()
        cardsServer.listen()
    })
    afterAll(() => {
        favsServer.close()
        cardsServer.close()
    })
    it('should render the favorited cards', async () => {
        render(
            <GuideProvider>
                <ProvideAuth>
                    <DeckProvider>
                        <MemoryRouter initialEntries={['/favorites']}>
                            <Favorites />
                        </MemoryRouter>
                    </DeckProvider>
                </ProvideAuth>
            </GuideProvider>
        )
        await screen.findByText('favorited card')
    })
})
