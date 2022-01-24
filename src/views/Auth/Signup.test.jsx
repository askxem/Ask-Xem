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

// Weird behaviors:
    // If test sends the correct email up line, matching test@test.com, and setUpserver responds with a user object.
        //  No error should be thrown, user should be directed to select page. Test throws error caused by a the setError timing out in signUp.jsx. Which means this mock server is erroring somehow and the setError call isn't coming back late.
    // If test sends the incorrect email up the line, not matching test@test.com, and setUpServer responds with an error.
        // Error is thrown and displayed on page. Not as expected though. There seems to be two errors attempting to display.

// const url = `${process.env.SUPABASE_URL}/auth/v1/signup`;
const url = 'https://pzdwkdslmaoyxsiqkohn.supabase.co/auth/v1/signup';

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
                        <Route path='/select'>
                            <Select />
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

        const signupButton = screen.getByRole('button');
        fireEvent.click(signupButton);
            
        await screen.findByText(/choose your guide/i);
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

        const signupButton = screen.getByRole('button');
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
        
        const signupButton = screen.getByText('Already have an account?');
        fireEvent.click(signupButton);
        
        await screen.findAllByText(/login/i);
    })
})