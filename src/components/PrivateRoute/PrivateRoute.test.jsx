import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, render, screen } from '@testing-library/react';
import { Route } from "react-router-dom"
import { MemoryRouter } from "react-router-dom"
import { ProvideAuth } from '../../context/AuthContext.jsx';
import Favorites from '../../views/Favorites/Favorites.jsx';
import Login from '../../views/Auth/Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';

jest.mock('../../context/AuthContext.jsx');
jest.mock('../../services/favorites.js')

const url = `${process.env.SUPABASE_URL}/auth/v1/token`;

let mockResponse = {user: {id: 1000, email: 'test@test.com'}};

const server = setupServer(
    rest.post(url, (req, res, ctx) => {
        // mocks user validation and error throwing
        const {email, password} = JSON.parse(req.body);
        if (email === 'test@test.com' && password === 'test-password') {
            return res(
                ctx.json(mockResponse)
                );
        } else {
            return res(
                ctx.status(400),
                ctx.json({error: 'Invalid credentials'})
            )
        }
    })
); 

describe('tests privateroute behavior', () => {
    
    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })   

    it('redirects signed out user to login page from favorites page', () => {
        render(
            <ProvideAuth>
                <MemoryRouter initialEntries={['/favorites']}>
                    <PrivateRoute path='/favorites'>
                        <Favorites />
                    </PrivateRoute>
                    <Route path='/login'>
                        <Login />
                    </Route>
                </MemoryRouter>
            </ProvideAuth>
        );
    
        screen.getByRole('button', {name: /login/i});
    });
    
    
    it('redirects signed out user to login page from favorites page, then redirects user back to favorites page on succcessful login', async () => {
        render(
            <ProvideAuth>
                <MemoryRouter initialEntries={['/favorites']}>
                    <PrivateRoute path='/favorites'>
                        <Favorites />
                    </PrivateRoute>
                    <Route path='/login'>
                        <Login />
                    </Route>
                </MemoryRouter>
            </ProvideAuth>
        );
    
        const emailInput = screen.getByLabelText(/email/i);
        const [passwordInput] = screen.getAllByLabelText(/password/i);
    
        fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
        fireEvent.change(passwordInput, {target: {value: 'test-password'}});
    
        const loginButton = screen.getByRole('button');
        fireEvent.click(loginButton);
    
        await screen.findByAltText(/red heart/i);
        await screen.findByText(/These are the cards you wanted to remember! If you don't see any yet, visit the cards and click on some hearts!/i)
    });
})