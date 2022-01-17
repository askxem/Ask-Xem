import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import About from './views/About/About.jsx';
import Profile from './views/Profile/Profile.jsx';
import Select from './views/Select/Select.jsx';
import Pronouns from './views/Pronouns/Pronouns.jsx';
import Beyond from './views/Beyond/Beyond.jsx';
import Favorites from './views/Favorites/Favorites.jsx';
import Home from './views/Home/Home.jsx';
import AuthForm from './components/Auth/AuthForm.jsx';
import PronounsDetail from './views/Pronouns/PronounsDetail.jsx';
import BeyondDetail from './views/Beyond/BeyondDetail.jsx';

// to protect:
// favorites, profile

// to add: 
// parent resources, can link to queer portraits

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>

          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/favorites'>
            <Favorites />
          </Route>
          <Route exact path='/pronouns/:term'>
            <PronounsDetail />
          </Route>
          <Route exact path='/beyond/:term'>
            <BeyondDetail />
          </Route>
          <Route exact path='/beyond'>
            <Beyond />
          </Route>
          <Route exact path='/pronouns'>
            <Pronouns />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/select'>
            <Select />
          </Route>
          <Route exact path='/'>
            {/* Here for testing purposes only. */}
            <AuthForm />
          </Route>

        </Switch>
      </Router>
    </Layout>
    );
}
