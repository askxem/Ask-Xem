//npm i msw before starting tests
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import Pronouns from './Pronouns'
import { GuideProvider } from '../../context/GuideContext/GuideContext'
import App from '../../App'

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
    it.skip('should render the pronouns cards', async () => {
        render(
            <GuideProvider>
            <ProvideAuth>
            <DeckProvider>
            <MemoryRouter initialEntries={['/pronouns']}>
                {/* <Switch>
                <Route exact path='/pronouns'> */}
                <Pronouns />
                {/* </Route>
                </Switch> */}
            </MemoryRouter>
             </DeckProvider>
             </ProvideAuth>
             </GuideProvider>
        )
        await screen.findByText('b;ahblah')
    })  
})
