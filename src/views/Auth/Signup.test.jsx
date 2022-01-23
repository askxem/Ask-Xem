// THINGS TO TEST:
    // MVP:
        //  Does page render with expected elements?
        //  User can login, which redirects the user to select page.
    // STRETCH: 
        //  User fails to signup, displays apppropriate errors
        //  User clicks 'Need an account?', redirects user to login page.
        //  When the password length reaches 12+, password contstraint text updates.

        // Mock, signup route

        describe('user can signup, redirects to select page on success', () => {
            
        it.skip('user can type in a 12+ chaaracter password, recieves password constraint feedback.', async () =>{
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
            screen.debug();
            fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
            fireEvent.change(passwordInput, {target: {value: 'test-password'}});

            screen.getByText(/🟢 Password must be at least 12 characters long./i);
        })
        })