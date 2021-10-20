import { React, lazy, Suspense, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import LazyLoad from './Components/LayLoadSpinner/LazyLoadSpinner';
import './App.css';

import Header from './Components/Header/Header.js';
import GetRide from './Components/GetRide/GetRide.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import Footer from './Components/Footer/Footer.js';
import RideSearch from './Components/RideSearch/RideSearch.js';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Contact from './Components/Contact/Contact.js';

const Home = lazy(() => import('./Components/Home/Home.js'));
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({
        isSignedIn: false,
        email: '',
        name: '',
        photo: '',
        success: false,
        error: ''
    });

    return (
        <div className="App">

            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <ScrollToTop>
                        <Route render={({location}) => (
                            <TransitionGroup>
                                <CSSTransition
                                key={location.key}
                                timeout={300}
                                classNames="fade"
                                >
                                <Suspense fallback={<LazyLoad></LazyLoad>}>
                                    <Switch location={location}>
                                        <Route exact path="/">
                                            <Header></Header>
                                            <Home></Home>
                                            <GetRide></GetRide>
                                            <Contact></Contact>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/home">
                                            <Header></Header>
                                            <Home></Home>
                                            <GetRide></GetRide>
                                            <Contact></Contact>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/login">
                                            <Header></Header>
                                            <Login></Login>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/signup">
                                            <Header></Header>
                                            <SignUp></SignUp>
                                            <Footer></Footer>
                                        </Route>
                                        <PrivateRoute path="/ride-search/:serviceRoute">
                                            <Header></Header>
                                            <RideSearch></RideSearch>
                                            <Footer></Footer>
                                        </PrivateRoute>
                                        <Route path="*">
                                            <NotFound></NotFound>
                                        </Route>
                                    </Switch>
                                    </Suspense>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                    </ScrollToTop>
                </Router>
            </UserContext.Provider>

        </div>
    );
    }

export default App;
