import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Chirp extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }

    render() {
        return <h1>Hi, {this.state.user.name}</h1>
    }
}

export default Chirp
