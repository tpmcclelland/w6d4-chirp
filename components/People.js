import React from 'react'
import { Link, browserHistory } from 'react-router'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'


class People extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = {
            // TODO: add whatever Keith will send me for people to follow. Not sure if I can mock up.
            id: '',
            mock: false,
        }
    }

    componentDidMount() {
        attachSharedState(this, (state) => this.setState({sharedState: state}))
        // attachSharedState(this)
        // TODO: make request for all people
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

mockedResponse() {
    var response = {
        user: {
            id: 69,
            name: 'Jeff',
            avatar: '',
            api_token: 'xxxxxxxxxxxxx'
        }
    }
    this.handleFollow(response)
}

    follow() {
        // TODO: twill be fired from handleFollow. maybe fetch? if/else statements? use the api key for this (/api/users/:id/follow). mock response would be?

        if (!this.state.mock) {
            console.log(this.state)
            fetch('https://0786c29b.ngrok.io/api/users/:id/follow', {
                body: JSON.stringify({
                        // TODO: get id from person I want to follow. do I need headers? ask Tom.
                    id: this.state.id,
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }


            })
            .then(function(response) {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw 'Follow response was not okay.'
                }
            })
            .then(this.handleFollow)
            .catch(function(error) {
                console.log('There has been an error in your fetch operation: ' + error.message)
            })
            // TODO: not sure what to do for a version of loggedInHandler.
        }
        else {
            this.mockedResponse()
        }
    }

    handleFollow(response){
        // TODO: will fire when button is clicked, which will then fire follow() method. if following, then change button text to unfollow. if no following, have text show as follow. need to call on whatever Keith is sending me.
        if (typeof response.id != 'undefined') {
            sessionStorage.setItem('chirp-id', response.id)
            sharedState({
                id: response.id })
            browser.history.push('/follow')
            // should this go there?
        }
        else {
            response.forEach(function(error) {
                var errorDiv = document.createElement('div')
                errorDiv.classList.add('alert', 'alert-danger')
                errorDiv.innerHTML = error
                document.querySelector('#errors').appendChild(errorDiv)
            })
        }
    }

    nowFollowingHandler() {
        // TODO: this should tie that users info to my account so that I can access it. sort of like loggedInHandler in Login.js. Will also contain sharedState possibly? Will also need an else parameter in case there is an error. Ask tom about sharedState.
        this.follow()
    }

    render() {
        return <div id="following">
              <h2>Interesting People</h2>
              <div className="row">
                <div className="col-xs-3">
                  <img className="followPic" src="https://robohash.org/keith" alt="Keith Smith Profile Pic" />
                </div>
                <div className="col-xs-6">
                  <div className="row smallFont">
                      <div className="col-xs-4 col-xs-offset-1"><strong>Keith Smith</strong></div>
                      <div className="col-xs-4 col-xs-offset-1">
                        {/* <!-- TODO: add plus icon next to follow --> */}
                        <button id="follow" type="button" className="btn btn-primary btn-success" onClick={this.handleFollow}>follow</button>
                      </div>
                  </div>
                </div>
              </div>
        </div>
    }
}

export default People
