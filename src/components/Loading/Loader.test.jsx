import { render } from '@testing-library/react';
import Loader from './Loader.jsx';

it('renders loader component', () => {
    const { container } = render(
        <Loader />
    )

    expect(container).toMatchSnapshot();
})