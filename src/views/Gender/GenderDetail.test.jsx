import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import GenderDetail from './GenderDetail'
import { GuideProvider } from '../../context/GuideContext/GuideContext'

const urlCards = 'https://pzdwkdslmaoyxsiqkohn.supabase.co/rest/v1/cards'

let mockCard = [{id: 2, title: 'awesomesauce', definition:'this is a card', source:'cardURL', image:'llama'}]

const serverCard = setupServer(
    rest.get(urlCards, (req, res, ctx) => {
       return res(
           ctx.json(mockCard)
       ) 
    })
)

const urlFavs = 'https://pzdwkdslmaoyxsiqkohn.supabase.co/rest/v1/favs'
let mockFavs = [{id: 2, card_id: 2, user_id: 2}]


const serverFav = setupServer(
    rest.get(urlFavs, (req, res, ctx) => {
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
        await screen.findByText('awesomesauce')
    })  
})
