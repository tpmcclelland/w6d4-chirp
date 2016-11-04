import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

// Set initial shared state
sharedState({
    user: {
        id: '',
        name: '',
        email: '',
        avatar: '',
        api_token: ''
    },
    post: '',
    posts: [],
    mock: false
})

window.sharedState = sharedState

import Welcome from '../components/Welcome'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ChirpLayout from '../components/ChirpLayout'

ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/chirp" component={ChirpLayout} />
        {/* <Route path="/" component={WeatherApp}>
            <IndexRoute component={CurrentDay} />
            <Route path="fiveday" component={FiveDayForecast} />
            <Route path="settings" component={AppSettings} />
        </Route> */}
    </Router>
    , document.getElementById('app')
)
