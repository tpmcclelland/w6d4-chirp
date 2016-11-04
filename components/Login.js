import React from 'react'
import { Link, browserHistory } from 'react-router'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Login extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = sharedState()
        this.state = {
            user: {
                email: 'me@me.com',
                password: '123456'
            },
            mock: true
        }
    }

    componentDidMount() {
        attachSharedState(this, (state) => this.setState({sharedState: state}))
        // attachSharedState(this)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    mockResponse() {
        var response = {
            user: {
                api_token: 99999999999
            }
        }

        this.loggedInHandler(response)
    }

    login() {

        if (!this.state.mock) {
            fetch('https://0786c29b.ngrok.io/api/login', {
                body: JSON.stringify({
                    email: this.state.user.email,
                    password: this.state.user.password
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
              if(response.ok) {
                response.json().then(loggedInHandler)
              } else {
                console.log('Network response was not ok.')
              }
            })
            .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message)
            })
        } else {
            this.mockResponse()
        }
    }

    loggedInHandler(response) {
        // response = ['error 1', 'error 2']
        // response.user = undefined

        if(typeof response.user != 'undefined') {
            sessionStorage.setItem('chirp-api-token', response.user.api_token)
            sharedState({
                user: {
                    api_token: response.user.api_token
                }})
            // TODO: add redirect after signin
            console.log('logged in: ', response)
            // window.location.href = '/chirp.html'
            browserHistory.push('/?loggedin=true')
            // document.cookie = 'phetchly=' + response.user.api_token + '; expires=Thu, 2 Aug 2001 20:47:11 UTC'
        } else {
            response.forEach(function(error) {
                var errorDiv = document.createElement('div')
                errorDiv.classList.add('alert', 'alert-danger')
                errorDiv.innerHTML = error
                document.querySelector('#errors').appendChild(errorDiv)
            })
        }
    }

    handleClick() {
        this.login()
    }

    render() {
        // TODO: Login: Add the rest of the form bindings
        return <div className="well">
                  <h2>Login</h2>
                  <br/>
                  <div id="errors"></div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="form-control" required/>
                  </div>
                  <div className="form-group">
                      <button id="signin" type="button" className="btn btn-primary btn-block" onClick={this.handleClick}>Log In</button>
                  </div>
                  <div className="form-group">
                    <Link to="/" className="btn btn-danger btn-block">Cancel</Link>
                </div>
            </div>
    }
}

export default Login
