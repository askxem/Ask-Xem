import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ProvideAuth } from '../../context/AuthContext.jsx'
import { GuideProvider } from '../../context/GuideContext/GuideContext.jsx'
import Select from '../Select/Select.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

const url = `${process.env.SUPABASE_URL}/auth/v1/signup`;

const mockResponse = {
    id: 1000,
    email: 'test@test.com'
}

const server = setupServer(
    rest.post(url, (req, res, ctx) => {
        // mocks user validation and error throwing
        const {email} = JSON.parse(req.body);
        if (email !== 'test@test.com') {
            return res(
                ctx.json(mockResponse)
                );
        } else {
            return res(
                ctx.status(400),
                ctx.json({error: 'User already registered'})
            );
        }
    })
);

describe('tests signup behavior', () => {
    
    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })

    it('user can type in a 12+ character password, recieves password constraint feedback.', async () =>{
        render(
            <ProvideAuth>
                <GuideProvider>
                    <MemoryRouter initialEntries={['/signup']}>
                        <Route path='/signup'>
                            <Signup />
                        </Route>
                    </MemoryRouter>
                </GuideProvider>
            </ProvideAuth>
        )

        const emailInput = screen.getByLabelText(/email/i);
        const [passwordInput] = screen.getAllByLabelText(/password/i);

        screen.getByText(/🔴 Password must be at least 12 characters long./i);

        fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
        fireEvent.change(passwordInput, {target: {value: 'test-password'}});

        screen.getByText(/🟢 Password must be at least 12 characters long./i);
    })


    it('user can signup, is redirected to select page', async () => {
        render(
            <ProvideAuth>
                <GuideProvider>
                    <MemoryRouter initialEntries={['/signup']}>
                        <Route exact path='/signup'>
                            <Signup />
                        </Route>
                        <Route exact path='/select'>
                            <Select />
                        </Route>
                    </MemoryRouter>
                </GuideProvider>
            </ProvideAuth>
        );

        const emailInput = screen.getByLabelText(/email/i);
        const [passwordInput] = screen.getAllByLabelText(/password/i);

        fireEvent.change(emailInput, {target: {value: 'newuser@test.com'}});
        fireEvent.change(passwordInput, {target: {value: 'test-password'}});

        const signupButton = screen.getByRole('button', {name: 'Create Account'});
        fireEvent.click(signupButton);
            
        await screen.findByText(/choose your guide/i);
        screen.getByAltText(/bunny/i);
        screen.getByAltText(/axolotl/i);
        screen.getByAltText(/lion/i);
        screen.getAllByRole('radio');
    });

    it('user attempts to signup with existing account, recieves signup error feedback', async () => {
        render(
            <ProvideAuth>
                <GuideProvider>
                    <MemoryRouter initialEntries={['/signup']}>
                        <Route exact path='/signup'>
                            <Signup />
                        </Route>
                        <Route exact path='/select'>
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

        const signupButton = screen.getByRole('button', {name: 'Create Account'});
        fireEvent.click(signupButton);

        await screen.findByText('🔴 User already registered.');
    });

    it("user clicks 'Already have an account?', is redirected to login page", async () => {
        render(
            <ProvideAuth>
                <GuideProvider>
                    <MemoryRouter initialEntries={['/signup']}>
                        <Route path='/signup'>
                            <Signup />
                        </Route>
                        <Route path='/login'>
                            <Login />
                        </Route>
                    </MemoryRouter>
                </GuideProvider>
            </ProvideAuth>
        );
        
        const loginLink = screen.getByRole('link', { name: 'Already have an account?' });
        fireEvent.click(loginLink);
        
        await screen.findByRole('button', { name: /login/i });
    })
})