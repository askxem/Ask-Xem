import { render } from '@testing-library/react'
import { Route, MemoryRouter } from 'react-router-dom';
import AuthForm from './AuthForm.jsx'

const testProps = {
    isSigningUp: false,
    email: 'test-email',
    password: 'test-password',
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    isPasswordVisible: false,
    setIsPasswordVisible: jest.fn()
}

describe('renders authForm component', () => {
    
    it('renders login form', () => {
        const {container} = render(
        <MemoryRouter initialEntries={['/']}>
            <Route path='/'>
                <AuthForm {...testProps}/>
            </Route>
        </MemoryRouter>
        );
    
        expect(container).toMatchSnapshot();
    })

    it('renders signup form', () => {
        const {container} = render(
            <MemoryRouter initialEntries={['/']}>
            <Route path='/'>
                <AuthForm {...testProps} isSigningUp={true}/>
            </Route>
        </MemoryRouter>
        );
    
        expect(container).toMatchSnapshot();
    })

})