import React from 'react'

class WelcomeLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <div id="welcome-errors"></div>
                      <h1 className="welcome-header-color"><img className="header-logo" src="./img/chirp-logo.png" alt="logo" /> Chirp</h1>
                      <hr />
                        {this.props.children}
                    </div>
                  </div>
            </div>
    }
}

export default WelcomeLayout
