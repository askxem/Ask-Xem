import { render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { GuideProvider } from "../../context/GuideContext/GuideContext.jsx"
import { DeckProvider } from "../../context/DeckContext/DeckContext.jsx"
import Pronouns from "../../views/Pronouns/Pronouns.jsx"
import Gender from "../../views/Gender/Gender.jsx"
import Guide from "./Guide.jsx"

it('renders guide component', () => {
  const { container } = render(
    <GuideProvider>
      <Guide text='test-text' />
    </GuideProvider>
  );

  expect(container).toMatchSnapshot();
});

it('when on the Pronouns page - should render the Pronouns guide text message', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/pronouns']}>
      <DeckProvider>
        <GuideProvider>
          <Pronouns />
        </GuideProvider>
      </DeckProvider>
    </MemoryRouter>
  );

  const guideText = "This is the Pronoun Deck - click on a card to find out more! Visit all of my friends for a colorful surprise :)"

  return waitFor(() => screen.findByText(guideText));

  // screen.getByText(guideText);
});

it('when on the Gender page - should render the Gender guide text message', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/gender']}>
      <DeckProvider>
        <GuideProvider>
          <Gender />
        </GuideProvider>
      </DeckProvider>
    </MemoryRouter>
  );

  const guideText = "This is the Gender Deck - click on a card to find out more! Visit all of my friends for a colorful surprise :)"

  await screen.findByText(guideText);
});