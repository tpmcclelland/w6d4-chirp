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

    render() {
      return <div id="user">
                <img className="profilePic" src="https://robohash.org/jeff" alt="Profile Picture" />
                  <div> Jeff Bumgardner</div>
                  <span>@JeffUsername</span>
                  <div className="row">
                    <div className="col-xs-4">
                      <div>Chirps</div>
                      <div>5,000</div>
                    </div>
                    <div className="col-xs-4">
                      <div>Following</div>
                      <div>392</div>
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
