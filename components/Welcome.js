import React from 'react'
import { Link } from 'react-router'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Welcome extends React.Component {
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

    render() {
        return <div className="well">
                    <img className="img-responsive logo" src="../img/chirp-logo.png" alt="logo" />
                    <br/><br/><br/>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">
                                <Link to="/signup" className="btn btn-success btn-block">
                                    Sign Up
                                </Link>
                            </div>
                            <div className="col-sm-6">
                                <Link to="/login" className="btn btn-primary btn-block">
                                    Log In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default Welcome
