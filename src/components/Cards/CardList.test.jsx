import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import CardList from './CardList';

const characterList = [{
   id: 1,
   title: 'Pepe Le Pew',
   animal: 'skunk',
   image:'skunkURL',
   category: 'pronoun' 
},
{
    id: 2,
    title: 'Taz',
    animal: 'tazmanian',
    image: 'tazURL',
    category: 'pronoun',
},
{
    id: 3,
    title: 'Tweety',
    animal: 'bird',
    image: 'birdURL',
    category: 'pronoun'
}]

const colors = ['red','orange','yellow']

it('renders front card component', () => {
    const { container } = render(
        <DeckProvider>
            <MemoryRouter>
            <CardList cards={characterList} rainbow={colors}/>
            </MemoryRouter>
        </DeckProvider>
    );

    expect(container).toMatchSnapshot();
})