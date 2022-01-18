import { render } from '@testing-library/react'
import { Route, MemoryRouter } from 'react-router-dom';
import AuthForm from './AuthForm.jsx'


describe('renders authForm component', () => {
    
    it('renders login form', () => {
        const {container} = render(
        <MemoryRouter initialEntries={['/']}>
            <Route path='/'>
                <AuthForm />
            </Route>
        </MemoryRouter>
        );
    
        expect(container).toMatchSnapshot();
    })

    it('renders signup form', () => {
        const {container} = render(
            <MemoryRouter initialEntries={['/']}>
            <Route path='/'>
                <AuthForm isSigningUp={true}/>
            </Route>
        </MemoryRouter>
        );
    
        expect(container).toMatchSnapshot();
    })

})