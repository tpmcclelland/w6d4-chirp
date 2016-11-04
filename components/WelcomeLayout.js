import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

// import Header from './Header'

class WelcomeLayout extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }

    render() {
        return <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <div id="welcome-errors"></div>
                      <h1 className="welcome-header-color"><img className="header-logo" src="/img/chirp-logo.png" alt="logo" /> Chirp</h1>
                      <hr />
                        {this.props.children}
                    </div>
                  </div>
            </div>
    }
}

export default WelcomeLayout
