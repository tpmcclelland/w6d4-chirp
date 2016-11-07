import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { browserHistory } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Header extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }

    componentDidMount() {
        // attachSharedState(this, (state) => this.setState({sharedState: state}))
        attachSharedState(this)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    handleLogout() {
        sessionStorage.clear();
        browserHistory.push(this.state.path)
    }

    render() {
        var imageSrc = this.state.api + this.state.user.avatar

        return <header className="row">
            <div className=" col-xs-3 col-xs-offset-3">
              <img id="chirpLogo" src="./img/chirp-logo.png" alt="Chirp Logo" />
            </div>
            <div id="searchBar" className="col-xs-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Find Interesting People..." disabled />
                <span className="input-group-btn">
                  <button className="btn btn-default disabled" type="button">Search</button>
                  <button className="btn btn-danger" type="button" onClick={this.handleLogout}>Logout</button>
                </span>
              </div>
            </div>
            <div className="col-xs-1">
              <img className="profilePic" src={imageSrc} alt="Profile Picture" />
            </div>
          </header>
    }
}

export default Header
