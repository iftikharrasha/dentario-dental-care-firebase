import { React, lazy, Suspense, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import GetRide from './Components/GetRide/GetRide.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import Footer from './Components/Footer/Footer.js';
import RideSearch from './Components/RideSearch/RideSearch.js';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Contact from './Components/Contact/Contact.js';
import NotFound from './Components/NotFound/NotFound.js';
import jwt_decode from "jwt-decode";
import './App.css';

export const UserContext = createContext();

function App() {
    const getDecodedUser = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return {
                isSignedIn: false,
                email: '',
                name: '',
                photo: '',
                success: false,
                error: ''
            };
        }
        const {name, email, picture} = jwt_decode(token);
        const decodedUser = {
            isSignedIn: true,
            email: email,
            photo: picture,
            success: true,
            name: (name.split(' '))[0]
        }
        return decodedUser;
    }

    const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());

    return (
        <div className="App">

            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <ScrollToTop>
                        <Route render={({location}) => (
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
                        )} />
                    </ScrollToTop>
                </Router>
            </UserContext.Provider>

        </div>
    );
    }

export default App;
