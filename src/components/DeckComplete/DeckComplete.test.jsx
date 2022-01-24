import {render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import DeckComplete from './DeckComplete.jsx';


it.only('renders the deck complete component', () => {
    const {container} = render(
      <MemoryRouter>
            <DeckComplete />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot();
})