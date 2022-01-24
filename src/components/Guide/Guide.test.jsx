import { render } from "@testing-library/react"
import { GuideProvider } from "../../context/GuideContext/GuideContext.jsx"
import Guide from "./Guide.jsx"

it('renders guide component', () => {
    const { container } = render(
        <GuideProvider>
            <Guide text='test-text'/>
        </GuideProvider>
    );
    expect(container).toMatchSnapshot();
});
