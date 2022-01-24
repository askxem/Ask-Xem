import { render, screen } from '@testing-library/react';
import { Route } from "react-router-dom"
import { MemoryRouter } from "react-router-dom"
import { ProvideAuth } from '../../context/AuthContext.jsx';
import Favorites from '../../views/Favorites/Favorites.jsx';
import Login from '../../views/Auth/Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';

jest.mock('../../context/AuthContext.jsx');
jest.mock('../../services/favorites.js')

it('redirects signed out user to login page from favorites page', () => {
    render(
        <ProvideAuth>
            <MemoryRouter initialEntries={['/favorites']}>
                <PrivateRoute path='/favorites'>
                    <Favorites />
                </PrivateRoute>
                <Route path='/login'>
                    <Login />
                </Route>
            </MemoryRouter>
        </ProvideAuth>
    );

    screen.getByRole('button', {name: /login/i});
});