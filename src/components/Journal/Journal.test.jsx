import { render } from '@testing-library/react'
import { ProvideAuth } from '../../context/AuthContext.jsx';
import Journal from './Journal.jsx';

jest.mock("../../services/journal.js");
jest.mock('../../services/users.js');
jest.mock('../../context/AuthContext.jsx')

it('renders the journal component', () => {
    const { container } = render(
        <ProvideAuth mockUser={{ id: 2 }}>
            <Journal setShowJournal={jest.fn()} />
        </ProvideAuth>
    )

    expect(container).toMatchSnapshot();
})