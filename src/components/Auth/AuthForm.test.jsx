import { render } from '@testing-library/react'
import AuthForm from './AuthForm.jsx'


describe('renders authForm component', () => {
    it('renders login form', () => {
        const {container} = render(
            <AuthForm />
        );
    
        expect(container).toMatchSnapshot();
    })

    it('renders signup form', () => {
        const {container} = render(
            <AuthForm isSigningUp={true}/>
        );
    
        expect(container).toMatchSnapshot();
    })

})