import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import CardFront from './CardFront'

const characterList = [{
   title: 'Pepe Le Pew',
   animal: 'skunk',
   image:'skunkURL',
   category: 'pronoun' 
},
{
    title: 'Taz',
    animal:'tazmanian',
    image:'tazURL',
    category: 'pronoun',
},
{
    title: 'Tweety',
    animal:'bird',
    image:'birdURL',
    category:'pronoun'
}]

const colors = [{
    blue: 'blue'
},
{
    purple: 'purple'
},
{
    pink:'pink'
}]

it('renders front card component', () => {
    const { container } = render(
        <DeckProvider>
            <MemoryRouter>
            <CardFront cards={characterList} raindow={colors}/>
            </MemoryRouter>
        </DeckProvider>
    );


    expect(container).toMatchSnapshot();
})