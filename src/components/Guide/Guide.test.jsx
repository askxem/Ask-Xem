import { render } from "@testing-library/react"
import Guide from "./Guide.jsx"

it('renders guide component', () => {
    const { container } = render(
        <Guide text='test-text'/>
    );

    expect(container).toMatchSnapshot();
});