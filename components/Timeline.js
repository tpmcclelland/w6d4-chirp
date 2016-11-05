import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import Post from './Post'

class Timeline extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = {
            post: ''
        }
    }

    componentDidMount() {
        attachSharedState(this, (state) => this.setState({sharedState: state}))
        // attachSharedState(this)
        this.getPosts()
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    mockResponse() {
        var response = {
            user: {
                id: 1,
                name: 'Tom',
                email: 'me@me.com',
                avatar: '',
                api_token: 'xxxxxxxxxxxxx'
            }
        }

        this.postedHandler(response)
    }

    post() {
        if (!this.state.mock) {
            // console.log(this.state)
            fetch(sharedState().api + '/api/posts', {
                body: JSON.stringify({
                    api_token: sessionStorage.getItem('chirp-api-token'),
                    post: {
                        body: this.state.post
                    }
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
              if(response.ok) {
                return response.json()
              } else {
                  throw 'Network response was not ok.'              }
            })
            .then(this.postedHandler)
            .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message)
            })
        } else {
            this.mockResponse()
        }
    }

    getPosts() {

        if (!this.state.mock) {
            // console.log(this.state)
            var token = sessionStorage.getItem('chirp-api-token')
            fetch(sharedState().api + '/api/posts?api_token=' + token, {
                method: 'GET',
                headers: {
                    // api_token: sessionStorage.getItem('chirp-api-token'),
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
              if(response.ok) {
                return response.json()
              } else {
                  throw 'Network response was not ok.'
              }
            })
            .then(this.getPostsHandler)
            .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message)
            })
        } else {
            this.mockResponse()
        }
    }

    getPostsHandler(response) {
        sharedState({
            posts: response.posts
        })
    }


    postedHandler(response) {
        this.setState({
            post: ''
            })
        this.getPosts()
    }

    handleClick() {
        this.post()
    }

    handlePostChange(e) {
        this.setState({
            post: e.target.value
            })
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.post()
        }
    }

    render() {
        // console.log(this.state.posts)
        var Posts = sharedState().posts.map((post, i) => {
            return <Post post={post} key={i} api={sharedState().api} />
        })

        var imageSrc = sharedState().api + sharedState().user.avatar

        return  <div id="chirping">
              <div className="list-unstyled">
                <div className="row">
                  <div className="col-xs-2">
                    <img className="profilePic" src={imageSrc} alt="Profile Picture" />
                  </div>
                  <div className="col-xs-9 input-group">
                    <input type="text" className="form-control" placeholder="Chirp..." maxLength="160" value={this.state.post} onChange={this.handlePostChange} onKeyPress={this.handleKeyPress}/>
                    <span className="input-group-btn">
                      {/* <!-- TODO: put chirp icon in text area that sends the post body --> */}
                    <button className="btn btn-default" type="button" onClick={this.handleClick}>Chirp</button>
                    </span>
                </div>
                <hr />
              </div>
                {Posts}
            </div>
            </div>
    }
}

export default Timeline
