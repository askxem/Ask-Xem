import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProvideAuth } from '../../context/AuthContext.jsx';
import Layout from './Layout.jsx';

it('renders layout component', () => {
    const { container } = render(
        <ProvideAuth>
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
        </ProvideAuth>
    )

    expect(container).toMatchSnapshot();
})