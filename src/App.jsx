import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import About from './views/About/About.jsx';
import Profile from './views/Profile/Profile.jsx';
import Select from './views/Select/Select.jsx';
import Pronouns from './views/Pronouns/Pronouns.jsx';
import Gender from './views/Gender/Gender.jsx';
import Favorites from './views/Favorites/Favorites.jsx';
import Home from './views/Home/Home.jsx';
import PronounsDetail from './views/Pronouns/PronounsDetail.jsx';
import GenderDetail from './views/Gender/GenderDetail.jsx';
import AuthForm from './components/Auth/AuthForm.jsx';
import Auth from './views/Auth/Auth.jsx';
import { ProvideAuth } from './context/AuthContext.jsx';
import './App.css'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';


// to protect:
// favorites, profile

// to add: 
// parent resources, can link to queer portraits

export default function App() {
  return (
    <ProvideAuth>
        <Router>
          <Switch>

            <Route exact path='/about'>
              <About />
            </Route>
            <PrivateRoute exact path='/favorites'>
              <Favorites />
            </PrivateRoute>
            <Route path='/pronoun/:id'>
              <Layout>
                <PronounsDetail />
              </Layout>
            </Route>
            <Route path='/gender/:id'>
              <Layout>
                <GenderDetail />
              </Layout>
            </Route>
            <Route exact path='/gender'>
              <Layout>
                <Gender />
              </Layout>
            </Route>
            <Route exact path='/pronouns'>
              <Layout>
                <Pronouns />
              </Layout>
            </Route>
            <PrivateRoute exact path='/profile'>
              <Profile />
            </PrivateRoute>
            <Route exact path='/select'>
              <Layout>
                <Select />
              </Layout>
            </Route>
            <Route exact path='/auth'>
              <Auth />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>

          </Switch>
        </Router>
    </ProvideAuth>
    );
}
