import React from 'react'

class Timeline extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return  <div id="chirping">
              <div className="list-unstyled">
                <div className="row">
                  <div className="col-xs-2">
                    <img className="profilePic" src="https://robohash.org/jeff" alt="Profile Picture" />
                  </div>
                  <div className="col-xs-9 input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                      {/* <!-- TODO: put chirp icon in text area that sends the post body --> */}
                    <button className="btn btn-default" type="button">Post</button>
                    </span>
                </div>
                <hr />
              </div>
              <div className="row">
                <div className="col-xs-3">
                  <img className="userPic" src="https://robohash.org/jeff" alt="Jeff Bumgardner Profile Pic" />
                </div>
                <div className="col-xs-6">
                  <div className="row smallFont">
                    <div className="col-xs-4 col-xs-offset-1"><strong>Jeff Bumgardner</strong></div>
                    <div className="col-xs-4 col-xs-offset-1"> 1 hr</div>
                  </div>
                </div><br />
                <div className="row">
                  <div className="col-xs-8 col-xs-offset-2">
                    <p className="chirpInput">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>
              <hr />

              {/* <!-- end of chirp/post section with one sample chirp/post and chirp/post input field above -->

            <!-- below are multiple mockups for sample chirp/posts --> */}
              <div className="row">
                <div className="col-xs-3">
                  <img className="userPic" src="https://robohash.org/tom" alt="Tom McClelland Profile Pic" />
                </div>
                <div className="col-xs-6">
                  <div className="row smallFont">
                      <div className="col-xs-4 col-xs-offset-1"><strong>Tom McClelland</strong></div>
                      <div className="col-xs-4 col-xs-offset-1"> 1 hr</div>
                  </div>
                </div><br />
                <div className="row">
                  <div className="col-xs-8 col-xs-offset-2">
                    <p className="chirpInput">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-xs-3">
                  <img className="userPic" src="https://robohash.org/keith" alt="Keith Brooks Profile Pic" />
                </div>
                <div className="col-xs-6">
                  <div className="row smallFont">
                      <div className="col-xs-4 col-xs-offset-1"><strong>Keith Smith</strong></div>
                      <div className="col-xs-4 col-xs-offset-1"> 1 hr</div>
                  </div>
                </div><br />
                <div className="row">
                  <div className="col-xs-8 col-xs-offset-2">
                    <p className="chirpInput">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>
              <hr />

              </div>
            </div>
    }
}

export default Timeline
