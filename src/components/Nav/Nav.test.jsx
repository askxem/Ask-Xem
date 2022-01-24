import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProvideAuth } from '../../context/AuthContext.jsx';
import Nav from './Nav.jsx'

jest.mock('../../context/AuthContext.jsx');
jest.mock('../../services/users.js');
jest.mock("../../services/journal.js");

describe('renders nav component', () => {
    it('render nav bar without user in context', () => {
        const {container} = render(
            <ProvideAuth>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </ProvideAuth>
        )
    
        expect(container).toMatchSnapshot();
    });

    it('render nav bar with user in context', () => {
        const {container} = render(
            <ProvideAuth mockUser={{id: 2, email: 'test@test.com'}}>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </ProvideAuth>
        )
    
        expect(container).toMatchSnapshot();
    });
})