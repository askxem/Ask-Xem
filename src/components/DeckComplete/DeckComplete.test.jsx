import {render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { DeckProvider } from '../../context/DeckContext/DeckContext.jsx';
import DeckComplete from './DeckComplete.jsx';


it.skip('renders the journal component', () => {
    const {container} = render(
      <MemoryRouter initialEntries={['/pronouns']}>
        <DeckProvider>
          <DeckComplete />
        </DeckProvider>
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot();
})