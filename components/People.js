import React from 'react'
import { Link, browserHistory } from 'react-router'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import Person from './Person'


class People extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = {
            // TODO: add whatever Keith will send me for people to follow. Not sure if I can mock up.
            id: '',
            following: '',
            mock: false,
            // people: [],
        }
    }

    componentDidMount() {
        attachSharedState(this, (state) => this.setState({sharedState: state}))
        // attachSharedState(this)
        // TODO: make request for all people
        this.all()
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

mockedResponse() {
    var response = [
        {
           name: 'Jeff',
            id: 2,
            following: false
        },
          {
             name: 'Jeff',
            id: 3,
            following: false
        },
        {
           name: 'Jeff',
           id: 4,
           following: false
       },
       {
          name: 'Jeff',
          id: 5,
          following: false
      },
       {
          name: 'Jeff',
         id: 6,
         following: false
     },
     {
        name: 'Jeff',
        id: 7,
        following: false
    },
     {
        name: 'Jeff',
       id: 8,
       following: false
   }
]
    this.handleAll(response)
}

all(){
    if (!this.state.mock) {
      //   console.log(this.state)
        var token = sessionStorage.getItem('chirp-api-token')
        fetch(sharedState().api + '/api/all?api_token=' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }


        })
        .then(function(response) {
            if (response.ok) {
                return response.json()
            }
            else {
                throw 'Follow response was not okay.'
            }
        })
        .then(this.handleAll)
        .catch(function(error) {
            console.log('There has been an error in your fetch operation: ' + error.message)
        })
        // TODO: not sure what to do for a version of loggedInHandler.
    }
    else {
        this.mockedResponse()
    }
}

handleAll(response) {
   console.log('handleAll ', response)
   sharedState({
      people: response.users
   })
   //  console.log('handleAll ',response)
}

follow(i, id) {
   // this.state.mock = false
        if (!this.state.mock) {
            // console.log(this.state)
            fetch(sharedState().api + '/api/users/'+ id + '/follow', {
            // fetch(sharedState().api + '/api/users/:id/follow', {
                body: JSON.stringify({
                        // TODO: get id from person I want to follow. do I need headers? ask Tom.
                    id: id,
                    api_token: sessionStorage.getItem('chirp-api-token')
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }


            })
            .then(function(response) {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw 'Follow response was not okay.'
                }
            })
            .then(this.handleFollow)
            .catch(function(error) {
                console.log('There has been an error in your fetch operation: ' + error.message)
            })
            // TODO: not sure what to do for a version of loggedInHandler.
        }
        else {
            this.mockedResponse()
        }

      // console.log(i, id)
    }

unfollow() {

}

handleFollow(response){
      //   // TODO: will fire when button is clicked, which will then fire follow() method. if following, then change button text to unfollow. if no following, have text show as follow. need to call on whatever Keith is sending me.
      //   if (typeof response.id.follow != true) {
      //       sessionStorage.setItem('chirp-id', response.id)
      //       sharedState({
      //           id: response.id })
      //       browser.history.push('/api/users/:id/follow')
      //       // should this go there?
      //   }
      //   else {
      //       // response.forEach(function(error) {
      //       //     var errorDiv = document.createElement('div')
      //       //     errorDiv.classList.add('alert', 'alert-danger')
      //       //     errorDiv.innerHTML = error
      //       //     document.querySelector('#errors').appendChild(errorDiv)
      //       // })
      //   }
      this.all()
      // console.log('handleFollow ', response)
      sharedState({
         refresh: true
      })
    }



render() {
   console.log('render people ', this.state.people)
   var People = sharedState().people.map((person, i) => {
      return <Person person={person} key={i} followed={person.following} api={sharedState().api} follow={() => this.follow(i, person.id)} />
   }
)
        return <div id="following">
              <h2>Interesting People</h2>
              {People}
        </div>
    }
}

export default People
