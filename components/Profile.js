import React from 'react'
import { Link } from 'react-router'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = {}
        this.state = sharedState()
    }

    componentDidMount() {
        // attachSharedState(this, (state) => this.setState({sharedState: state}))
        attachSharedState(this)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    getPostCount() {
        // console.log('post count', sharedState().posts, sharedState().user)
        return sharedState().posts.reduce(function(previous, current) {
            if (current.user.id === sharedState().user.id) {
                return ++previous
            } else {
                return previous
            }
        }, 0)
    }

    getFollowingCount() {
        // console.log('following count', sharedState().people)
        return sharedState().people.reduce(function(previous, current) {
            if (current.following) {
                return ++previous
            } else {
                return previous
            }
        }, 0)
    }

    render() {
      var imageSrc = this.state.api + this.state.user.avatar
    //   console.log('render profile')
      return <div id="user">
                <img className="profilePic" src={imageSrc} alt="Profile Picture" />
                  <div>{this.state.user.name}</div>
                  <span>{this.state.user.email}</span>
                  <div className="row">
                    <div className="col-xs-4">
                      <div>Chirps</div>
                      <div>{this.getPostCount()}</div>
                    </div>
                    <div className="col-xs-4">
                      <div>Following</div>
                      <div>{this.getFollowingCount()}</div>
                    </div>
                    <div className="col-xs-4">
                      <div>Followers</div>
                      <div>N/A</div>
                    </div>
                  </div>
              </div>
    }
}

export default Profile
