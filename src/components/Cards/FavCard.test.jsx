import { fireEvent, render, screen } from '@testing-library/react';
import { ProvideAuth } from '../../context/AuthContext.jsx';
import CardBack from './CardBack.jsx';

jest.mock('../../services/favorites.js')
jest.mock('../../context/AuthContext.jsx');

const mockCard = {
    id: 1,
    title: 'Janelle Monae',
    animal: 'human',
    definition: 'perfection incarnate',
    image: 'url.png'
}

it('renders card with empty heart, renders full heart onClick', async () => {
        render(
            <ProvideAuth mockUser={{id: 1}}>
                <CardBack 
                card={mockCard}
                favStatus={false}/>
            </ProvideAuth>
        );

        const heartButton = screen.getByAltText(/empty heart/i);
        console.log(heartButton);
        fireEvent.click(heartButton);

        screen.getByAltText(/full heart/i);
});