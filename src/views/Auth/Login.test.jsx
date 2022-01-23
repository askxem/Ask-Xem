import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Login from './Login.jsx'
import { ProvideAuth } from '../../context/AuthContext.jsx'
import { Route } from 'react-router-dom'
import Select from '../Select/Select.jsx'
import { GuideProvider } from '../../context/GuideContext/GuideContext.jsx'


// THINGS TO TEST:
    // MVP:
        //  Does page render with expected elements?
        //  User can login, which redirects the user to select page.
    // STRETCH: 
        //  User fails to login, displays 'Please check credentials.'
        //  User clicks 'already have an account?', redirects user to signup page.
        //  When the password length reaches 12+, password contstrain text updates.

        // Mock login route

        const url = 'https://pzdwkdslmaoyxsiqkohn.supabase.co/auth/v1/token'

        let mockResponse = {id: 1000, email: 'test@test.com'}

        const server = setupServer(
            rest.post(url, (req, res, ctx) => {
                // mocks user validation and error throwing
                const {email, password} = JSON.parse(req.body);
                if (email === 'test@test.com' && password === 'test-password') {
                    return res(
                        ctx.json(mockResponse)
                        ) 
                } else {
                    throw('Invalid login credentials');
                }
            })
        )

        

    describe('test login behavior', () => {

        beforeAll(() => {
            server.listen()
        })

        afterAll(() => {
            server.close()
        })


        it('user can type in a 12+ chaaracter password, recieves password constraint feedback.', async () =>{
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
            )

            const emailInput = screen.getByLabelText(/email/i);
            // query for single label returns multiple matches.
            const [passwordInput] = screen.getAllByLabelText(/password/i);

            screen.getByText(/🔴 Password must be at least 12 characters long./i);

            fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
            fireEvent.change(passwordInput, {target: {value: 'test-password'}});

            screen.getByText(/🟢 Password must be at least 12 characters long./i);
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
            )

            const emailInput = screen.getByLabelText(/email/i);
            // query for single label returns multiple matches.
            const [passwordInput] = screen.getAllByLabelText(/password/i);

            fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
            fireEvent.change(passwordInput, {target: {value: 'test-password'}});

            const loginButton = screen.getByRole('button');

            fireEvent.click(loginButton);

            await screen.findByText(/choose your guide/i);
        })
        
        
        it('user attempts to login with incorrect credentials, recieves login credential feedback', async () => {
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
            )
            
            const emailInput = screen.getByLabelText(/email/i);
            // query for single label returns multiple matches.
            const [passwordInput] = screen.getAllByLabelText(/password/i);

            fireEvent.change(emailInput, {target: {value: 'fail@test.com'}});
            fireEvent.change(passwordInput, {target: {value: 'test-password'}});
            
            const loginButton = screen.getByRole('button');
            
            fireEvent.click(loginButton);
            
            await screen.findByText(/🔴 Please check your credentials/i);
        })
    })