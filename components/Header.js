import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Header extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }

    render() {
        return <header className="row">
            <div className=" col-xs-3 col-xs-offset-5">
              <img id="chirpLogo" src="./img/chirp-logo.png" alt="Chirp Logo" />
            </div>
            <div id="searchBar" className="col-xs-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Find Interesting People..." />
                <span className="input-group-btn">
                    {/* <!-- TODO: Change from button to icon without borders --> */}
                  <button className="btn btn-default" type="button">Search</button>
                </span>
              </div>
            </div>
            <div className="col-xs-1">
              <img className="profilePic" src="https://robohash.org/jeff" alt="Profile Picture" />
            </div>
          </header>
    }
}

export default Header
