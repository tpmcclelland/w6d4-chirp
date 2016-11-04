import React from 'react'
import { Link, browserHistory} from 'react-router'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = sharedState()
        this.state = {
            email: '',
            password: '',
            name: '',
            avatar: '',
            mock: false
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
                id: 1,
                name: 'Tom',
                email: 'me@me.com',
                avatar: '',
                api_token: 'xxxxxxxxxxxxx'
            }
        }

        this.signedUpHandler(response)
    }

    signup() {
        if(!this.state.mock) {
            fetch('https://0786c29b.ngrok.io/api/signup', {
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name,
                    avatar: this.state.avatar
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
              if(response.ok) {
                return response.json()
              } else {
                throw 'Network response was not ok.'
              }
            })
            .then(this.signedUpHandler)
            .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message)
            })
        } else {
            this.mockResponse()
        }
    }

    signedUpHandler(response){
        // response = ['error 1', 'error 2']
        // response.user = undefined
        console.log(this.state)

        if(typeof response.user != 'undefined') {
            sessionStorage.setItem('chirp-api-token', response.user.api_token)
            sessionStorage.setItem('chirp-user-id', response.user.id)
            sharedState({
                user: {
                    id: response.user.id,
                    name: response.user.name,
                    email: response.user.email,
                    avatar: response.user.avatar,
                    api_token: response.user.api_token
                }})
            // TODO: Add redirect after sign up
            console.log('signed up:', response)
            browserHistory.push('/chirp?signedup=true')
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
        this.signup()
    }

    render() {
        // TODO: Signup: Add the rest of the form bindings
        return  <div className="well">
                <h2>Sign Up</h2>
                <br/>
                <div id="errors"></div>
                <br/>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="form-control" required value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" id="avatar" name="avatar" className="form-control" required onChange={(e) => this.setState({avatar:e.target.files[0]})}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control" required value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="form-control" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <button id="signup" type="button" className="btn btn-success btn-block" onClick={this.handleClick}>Sign Up</button>
                  </div>
                  <div className="form-group">
                      <Link to="/" className="btn btn-danger btn-block">Cancel </Link>
                  </div>
            </div>
    }
}

export default Signup
