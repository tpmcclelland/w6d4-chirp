var signup = document.querySelector('#signup')
// TODO: Mock Signup Response
signup.addEventListener('click', signupHandler)
// signup.addEventListener('click', mockResponse)

function signupHandler() {
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value
    var name = document.querySelector('#name').value
    var avatar = document.querySelector('#avatar').value

    fetch('https://d3459c34.ngrok.io/api/signup', {
        body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            avatar: avatar,
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
      if(response.ok) {
        response.json().then(signedupHandler)
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

    signedupHandler(response)
}

function signedupHandler(response){
    if(typeof response.user != 'undefined') {
        sessionStorage.setItem('chirp-api-token', response.user.api_token)
        // TODO: Add redirect after sign up
        console.log('signed up:', response)
        window.location.href = '/chirp.html'
    } else {
        response.forEach(function(error) {
            var errorDiv = document.createElement('div')
            errorDiv.classList.add('alert', 'alert-danger')
            errorDiv.innerHTML = error
            document.querySelector('#errors').appendChild(errorDiv)
        })
    }
}
