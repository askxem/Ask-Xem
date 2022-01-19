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
import './App.css'

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

          <Route path='/pronoun/:id'>
            <PronounsDetail />
          </Route>
    
          <Route path='/gender/:id'>
            <GenderDetail />
          </Route>
    
          <Route exact path='/gender'>
            <Gender />
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
          <Route exact path='/auth'>
            <Auth />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>

        </Switch>
      </Router>
    </Layout>
    );
}
