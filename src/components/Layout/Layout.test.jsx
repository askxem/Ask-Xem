import { render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import { ProvideAuth } from '../../context/AuthContext.jsx';

jest.mock('../../context/AuthContext.jsx');

it('renders layout component', () => {
    const { container } = render(
        <ProvideAuth>
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
        </ProvideAuth>
    )

    expect(container).toMatchSnapshot();
<<<<<<< HEAD
})
=======
})
>>>>>>> 7bb88b403a2b6cdba29a5e6f8af8870df456b680
