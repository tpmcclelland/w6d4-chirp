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

const path = window.location.href.includes('github') ? '/w6d4-chirp/' : '/'

sharedState({
    user: user,
    posts: [],
    mock: false,
    api: 'https://stormy-oasis-22187.herokuapp.com',
    path: path,
    people: []
})

window.sharedState = sharedState

import App from '../components/App'
import Welcome from '../components/Welcome'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ChirpLayout from '../components/ChirpLayout'



ReactDOM.render (

    <Router history={browserHistory}>
        <Route path={path} component={App} >
            <IndexRoute component={Welcome} />
            <Route path='login' component={Login} />
            <Route path='signup' component={Signup} />
            <Route path='chirp' component={ChirpLayout} />
        </Route>
        {/* <Route path="/" component={WeatherApp}>
            <IndexRoute component={CurrentDay} />
            <Route path="fiveday" component={FiveDayForecast} />
            <Route path="settings" component={AppSettings} />
        </Route> */}
    </Router>
    , document.getElementById('app')
)
