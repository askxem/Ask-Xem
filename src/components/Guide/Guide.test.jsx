import { render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { GuideProvider } from "../../context/GuideContext/GuideContext.jsx"
import { DeckProvider } from "../../context/DeckContext/DeckContext.jsx"
import Gender from "../../views/Gender/Gender.jsx"
import Guide from "./Guide.jsx"
import Pronouns from "../../views/Pronouns/Pronouns.jsx"

it('renders guide component', () => {
    const { container } = render(
        <GuideProvider>
            <Guide text='test-text'/>
        </GuideProvider>
    );
    expect(container).toMatchSnapshot();
});

it('should render the Gender guide text message', async() => {
  render(
      <GuideProvider>
        <DeckProvider>
            <MemoryRouter initialEntries={['/gender']}>
                <Gender />
            </MemoryRouter>
          </DeckProvider>
      </GuideProvider>
  );

screen.getByLabelText(/loading./i)

const guideText = "This is the Gender Deck - click on a card to find out more! Visit all of my friends for a colorful surprise :)"

await waitFor(() => screen.findByText(guideText));
}); 

it('when on the Pronouns page - should render the Pronouns guide text message', async() => {
  render(
    <MemoryRouter initialEntries={['/pronouns']}>
      <DeckProvider>
        <GuideProvider>
            <Pronouns />
        </GuideProvider>
      </DeckProvider>
    </MemoryRouter>
  )

  screen.getByLabelText(/loading./i)

  const guideText = "This is the Pronoun Deck - click on a card to find out more! Visit all of my friends for a colorful surprise :)"

  await waitFor(() => screen.findByText(guideText));
});