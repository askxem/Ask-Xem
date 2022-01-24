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
import { ProvideAuth } from './context/AuthContext.jsx';
import { DeckProvider } from './context/DeckContext/DeckContext.jsx';
import { GuideProvider } from './context/GuideContext/GuideContext.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import './App.css'
import Login from './views/Auth/Login.jsx';
import Signup from './views/Auth/Signup.jsx';

export default function App() {
  return (
    <ProvideAuth>
      <DeckProvider>
        <GuideProvider>
    
          <Router>
            <Layout>
              <Switch>

                <Route exact path='/about'>
                  <About />
                </Route>
        
                <PrivateRoute exact path='/favorites'>
                  <Favorites />
                </PrivateRoute>
        
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
        
                <PrivateRoute exact path='/profile'>
                  <Profile />
                </PrivateRoute>
        
                <Route exact path='/select'>
                    <Select />
                </Route>
        
                <Route exact path='/login'>
                  <Login />
                </Route>

                <Route exact path='/signup'>
                  <Signup />
                </Route>
        
                <Route exact path='/'>
                  <Home />
                </Route>

              </Switch>
            </Layout>
          </Router>
          
        </GuideProvider>
      </DeckProvider>
    </ProvideAuth>
    );
}
