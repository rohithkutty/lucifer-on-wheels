import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logOutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Landing from './components/layouts/landing-page';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/dashboard/dashboard';
import CreateProfile from './components/create-profile/CreateProfile';

//check for token
if (localStorage.jwtToken) {
    // set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // decode token and get user info
    const decoded = jwtDecode(localStorage.jwtToken);
    // set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    //check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        //logout user
        store.dispatch(logOutUser());
        //clear current profile
        store.dispatch(clearCurrentProfile());
        //redirect to login again
        window.location.href = '/login'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path='/' component={Landing} />
                        <div className='container'>
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/login' component={Login} />
                            <Switch>
                                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
