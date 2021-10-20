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
import GetService from './Components/GetService/GetService.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import Footer from './Components/Footer/Footer.js';
import ServiceSearch from './Components/ServiceSearch/ServiceSearch.js';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Contact from './Components/Contact/Contact.js';
import NotFound from './Components/NotFound/NotFound.js';
import jwt_decode from "jwt-decode";
import './App.css';
import Faq from './Components/Faq/Faq.js';
import About from './Components/About/About.js';
import BigImg from './Components/BigImg/BigImg.js';

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
                                            <GetService></GetService>
                                            <BigImg></BigImg>
                                            <Contact></Contact>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/home">
                                            <Header></Header>
                                            <Home></Home>
                                            <GetService></GetService>
                                            <BigImg></BigImg>
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
                                        <Route path="/about">
                                            <Header></Header>
                                            <About></About>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/faq">
                                            <Header></Header>
                                            <Faq></Faq>
                                            <Footer></Footer>
                                        </Route>
                                        <PrivateRoute path="/service-search/:serviceRoute">
                                            <Header></Header>
                                            <ServiceSearch></ServiceSearch>
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
