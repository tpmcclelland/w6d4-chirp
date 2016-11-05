import React from 'react'
import { Link } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

import WelcomeLayout from './WelcomeLayout'

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = sharedState()
    }

    componentDidMount() {
        // attachSharedState(this, (state) => this.setState({sharedState: state}))
        attachSharedState(this)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    render() {
        return <WelcomeLayout>
                <div className="well">
                    <img className="img-responsive logo" src="./img/chirp-logo.png" alt="logo" />
                    <br/><br/><br/>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">
                                <Link to={this.state.path + 'signup'} className="btn btn-success btn-block">
                                    Sign Up
                                </Link>
                            </div>
                            <div className="col-sm-6">
                                <Link to={this.state.path + 'login'} className="btn btn-primary btn-block">
                                    Log In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </WelcomeLayout>
    }
}

export default Welcome
