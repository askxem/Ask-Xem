import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import CardFront from './CardFront'

it('renders front card component', () => {
    const { container } = render(
        <DeckProvider>
            <MemoryRouter>
            <CardFront card='Sylvestor The Cat'/>
            </MemoryRouter>
        </DeckProvider>
    );


    expect(container).toMatchSnapshot();
})