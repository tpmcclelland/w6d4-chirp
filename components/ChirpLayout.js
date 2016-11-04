import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

import Header from './Header'
import Profile from './Profile'
import Timeline from './Timeline'
import People from './People'

class ChirpLayout extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }

    render() {
        return <div>
                <Header />
                <br />
                <main className="container spacing">
                  <div className="row">
                    <div className="col-xs-3 text-center column">
                        <Profile />
                    </div>
                    <div className="col-xs-6 text-center column">
                        <Timeline />
                    </div>
                    <div className="col-xs-3 text-center column">
                        <People />
                    </div>
                </div>
                </main>
        </div>
    }
}

export default ChirpLayout
