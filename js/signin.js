var signin = document.querySelector('#signin')
// TODO: Mock Signin Response
// signin.addEventListener('click', signinHandler)
signin.addEventListener('click', mockResponse)

function signinHandler() {
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value

    fetch('https://d3459c34.ngrok.io/log_in', {
        body: JSON.stringify({
            email: email,
            password: password
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
      if(response.ok) {
        response.json().then(signedinHandler)
      } else {
        console.log('Network response was not ok.')
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message)
    })
}

function mockResponse(){
    var response = {
        user: {
            api_token: 99999999999
        }
    }

    signedinHandler(response)
}

function signedinHandler(response) {
    // console.log(response)
    sessionStorage.setItem('chirp-api-token', response.user.api_token)
    // TODO: add redirect after signin
    console.log('signed in: ', response)
    // window.location.href = '/photos.html'
    // document.cookie = 'phetchly=' + response.user.api_token + '; expires=Thu, 2 Aug 2001 20:47:11 UTC'
}
