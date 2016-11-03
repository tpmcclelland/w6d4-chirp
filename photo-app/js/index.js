var signin = document.querySelector('#signin')
var signup = document.querySelector('#signup')

signup.addEventListener('click', signupHandler)
signin.addEventListener('click', signinHandler)

function signupHandler() {
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value

    fetch('https://9326a318.ngrok.io/users', {
        body: JSON.stringify({
            email: email,
            password: password
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(signedupHandler)
}

function signedupHandler(response){
    if(typeof response.user != 'undefined') {
        sessionStorage.setItem('phetchly', response.user.api_token)
        window.location.href = '/photos.html'
    } else {
        response.forEach(function(error) {
            var errorDiv = document.createElement('div')
            errorDiv.classList.add('alert', 'alert-danger')
            errorDiv.innerHTML = error
            document.querySelector('#errors').appendChild(errorDiv)
        })
    }
}

function signinHandler() {
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value

    fetch('https://9326a318.ngrok.io/log_in', {
        body: JSON.stringify({
            email: email,
            password: password
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(signedinHandler)
}

function signedinHandler(response) {
    // console.log(response)
    sessionStorage.setItem('phetchly', response.user.api_token)
    window.location.href = '/photos.html'
    // document.cookie = 'phetchly=' + response.user.api_token + '; expires=Thu, 2 Aug 2001 20:47:11 UTC'
}
