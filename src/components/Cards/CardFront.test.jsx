import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { DeckProvider } from '../../context/DeckContext/DeckContext'
import CardFront from './CardFront'

const character = {
  title: 'Sylvestor the Cat',
  animal: 'cat',
  image: 'testURL',
}
it('renders front card component', () => {
  const { container } = render(
    <DeckProvider>
      <MemoryRouter>
        <CardFront card={character} />
      </MemoryRouter>
    </DeckProvider>
  )

  expect(container).toMatchSnapshot()
})
