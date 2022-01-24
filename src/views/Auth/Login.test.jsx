import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext.jsx'
import { GuideProvider } from '../../context/GuideContext/GuideContext.jsx'
import Select from '../Select/Select.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

const url = `${process.env.SUPABASE_URL}/auth/v1/token`;

let mockResponse = {id: 1000, email: 'test@test.com'};

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

describe('test login behavior', () => {
    
    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })

    it('user can login, is redirected to select page', async () => {
        render(
            <ProvideAuth>
                <GuideProvider>
                    <MemoryRouter initialEntries={['/login']}>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/select'>
                            <Select />
                        </Route>
                    </MemoryRouter>
                </GuideProvider>
            </ProvideAuth>
        );

        const emailInput = screen.getByLabelText(/email/i);
        const [passwordInput] = screen.getAllByLabelText(/password/i);

        fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
        fireEvent.change(passwordInput, {target: {value: 'test-password'}});

        const loginButton = screen.getByRole('button');
        fireEvent.click(loginButton);

        await screen.findByText(/choose your guide/i);
        screen.getByAltText(/bunny/i);
        screen.getByAltText(/axolotl/i);
        screen.getByAltText(/lion/i);
        screen.getAllByRole('radio');
    });
    
    it('user attempts to login with incorrect credentials, recieves login error feedback', async () => {
        render(
            <ProvideAuth>
                <GuideProvider>
                    <MemoryRouter initialEntries={['/login']}>
                        <Route path='/login'>
                            <Login />
                        </Route>
                    </MemoryRouter>
                </GuideProvider>
            </ProvideAuth>
        );
        
        const emailInput = screen.getByLabelText(/email/i);
        const [passwordInput] = screen.getAllByLabelText(/password/i);

        fireEvent.change(emailInput, {target: {value: 'fail@test.com'}});
        fireEvent.change(passwordInput, {target: {value: 'test-password'}});
        
        const loginButton = screen.getByRole('button', {name: /login/i});
        fireEvent.click(loginButton);
        
        await screen.findByText(/🔴 Please check your credentials/i);
    })

    it("user clicks 'Need an account?', is redirected to signup page", () => {
        render(
            <ProvideAuth>
                <GuideProvider>
                    <MemoryRouter initialEntries={['/login']}>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/signup'>
                            <Signup />
                        </Route>
                    </MemoryRouter>
                </GuideProvider>
            </ProvideAuth>
        );
        
        const signupLink = screen.getByRole('link', { name: 'Need an account?' });
        fireEvent.click(signupLink);
        
        screen.getByRole('button', { name: /create account/i });
    })
})