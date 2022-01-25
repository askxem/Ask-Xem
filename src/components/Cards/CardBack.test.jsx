import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext.jsx';
import CardBack from './CardBack';

jest.mock('../../services/users.js');
jest.mock('../../context/AuthContext.jsx')

const mockFavIdResponse = [{ 'card_id': 1 }]
const url = process.env.SUPABASE_URL + '/rest/v1'
const favsServer = setupServer(
    rest.get(url + '/favs', (req, res, ctx) => { return res(ctx.json(mockFavIdResponse)) }
    ))

describe('Favorites view', () => {
    beforeAll(() => {
        favsServer.listen()
    })
    afterAll(() => {
        favsServer.close()
    })

    it('should display the back of the card', async () => {
        const { container } = render(
            <ProvideAuth mockUser={{ id: 2 }}>
                <MemoryRouter>
                    <CardBack card={{
                        id: 1,
                        title: 'Janelle Monae',
                        animal: 'human',
                        definition: 'perfection incarnate',
                        image: 'url.png'
                    }} favStatus={true} />
                </MemoryRouter>
            </ProvideAuth>
        )

        expect(container).toMatchSnapshot()
        await screen.findByText('Janelle Monae')

    })
})