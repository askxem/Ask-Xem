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

const urlCards = 'https://pzdwkdslmaoyxsiqkohn.supabase.co/rest/v1/cards'
let mockCard = [{id: 1, title: 'card', definition:'this is a card', source:'cardURL', image:'dog'}]
const serverCard = setupServer(
    rest.get(urlCards, (req, res, ctx) => {
       return res(
           ctx.json(mockCard)
       ) 
    })
)

const urlFavs = 'https://pzdwkdslmaoyxsiqkohn.supabase.co/rest/v1/favs'
let mockFavs = [{id: 1, card_id: 1, user_id: 1}]
const serverFav = setupServer(
    rest.get(urlFavs, (req, res, ctx) => {
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
        // screen.debug()
        await screen.findByText('card')
        // screen.debug()
    })  
})