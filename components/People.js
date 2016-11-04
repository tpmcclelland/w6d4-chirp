import React from 'react'

class People extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div id="following">
              <h2>Interesting People</h2>
              <div className="row">
                <div className="col-xs-3">
                  <img className="followPic" src="https://robohash.org/keith" alt="Keith Smith Profile Pic" />
                </div>
                <div className="col-xs-6">
                  <div className="row smallFont">
                      <div className="col-xs-4 col-xs-offset-1"><strong>Keith Smith</strong></div>
                      <div className="col-xs-4 col-xs-offset-1">
                        {/* <!-- TODO: add plus icon next to follow --> */}
                        <button className="btn btn-primary btn-success">follow</button>
                      </div>
                  </div>
                </div>
              </div>
        </div>
    }
}

export default People
