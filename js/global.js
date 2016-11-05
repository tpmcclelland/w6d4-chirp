import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

// Set initial shared state
var sessionUser = sessionStorage.getItem('chirp-user')
var user = {
    id: '',
    name: '',
    email: '',
    avatar: '',
    api_token: ''
}

if (sessionUser) {
    user = JSON.parse(sessionUser)
}

sharedState({
    user: user,
    posts: [],
    mock: false,
    api: 'https://stormy-oasis-22187.herokuapp.com'
})

window.sharedState = sharedState

import Welcome from '../components/Welcome'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ChirpLayout from '../components/ChirpLayout'

var path = '/'

if (window.location.href.includes('github')) {
    path = '/w6d4-chirp/'
}   

ReactDOM.render (

    <Router history={browserHistory}>
        <Route path={path} component={Welcome} />
        <Route path={path + 'login'} component={Login} />
        <Route path={path + 'signup'} component={Signup} />
        <Route path={path + 'chirp'} component={ChirpLayout} />
        {/* <Route path="/" component={WeatherApp}>
            <IndexRoute component={CurrentDay} />
            <Route path="fiveday" component={FiveDayForecast} />
            <Route path="settings" component={AppSettings} />
        </Route> */}
    </Router>
    , document.getElementById('app')
)
