import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import PronounsDetail from './PronounsDetail'
import { GuideProvider } from '../../context/GuideContext/GuideContext'

const urlPronoun= 'https://en.pronouns.page/api/pronouns'
let mockPronoun = ['test']
const serverPronoun = setupServer(
    rest.get(urlPronoun, (req, res, ctx) => {
       return res(
           ctx.json(mockPronoun)
       ) 
    })
)

const urlCards = process.env.SUPABASE_URL + '/rest/v1'
let mockCard = [{id: 1, title: 'coolio', definition:'this is a card', source:'cardURL', image:'dog'}]
const serverCard = setupServer(
    rest.get(urlCards + '/cards', (req, res, ctx) => {
       return res(
           ctx.json(mockCard)
       ) 
    })
)

const urlFavs = process.env.SUPABASE_URL + '/rest/v1'
let mockFavs = [{id: 1, card_id: 1, user_id: 1}]
const serverFav = setupServer(
    rest.get(urlFavs + '/favs', (req, res, ctx) => {
       return res(
           ctx.json(mockFavs)
       ) 
    })
)

describe('Pronouns Detail', () => {
    beforeAll(() => {
        serverCard.listen()
        serverFav.listen()
        serverPronoun.listen()
    })
    afterAll(() => {
        serverCard.close()
        serverFav.close()
        serverPronoun.close()
    })
    it('should render pronoun details', async () => {
        render(
            <GuideProvider>
            <ProvideAuth>
            <DeckProvider>
            <MemoryRouter initialEntries={['/pronoun/1']}>
                <PronounsDetail />
            </MemoryRouter>
             </DeckProvider>
             </ProvideAuth>
             </GuideProvider>
        )
        screen.getByLabelText(/loading./i)
        await screen.findByText('coolio')
    })  
})