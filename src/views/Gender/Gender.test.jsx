import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import Gender from './Gender'
import { GuideProvider } from '../../context/GuideContext/GuideContext'
// import App from '../../App'

// const url = process.env.SUPABASE_URL + '/rest/v1'
// const url = 'https://pzdwkdslmaoyxsiqkohn.supabase.co/rest/v1/cards?select=*&order=title.asc.nullslast&category=eq.pronoun'
const url = 'https://pzdwkdslmaoyxsiqkohn.supabase.co/rest/v1/cards'

let mockResponse = [{title: 'Gender', animal:'dog', image:'URL'}]

const server = setupServer(
    rest.get(url, (req, res, ctx) => {
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
        await screen.findByText('Gender')
    })  
})
