const form = document.querySelector('.form-control')
const email = document.getElementById('email')

form.addEventListener('submit', event => {
    event.preventDefault()

    validateData()
})

function validateData() {
    const emailValue = email.value.trim()

    if(emailValue === '') {
        setErroFor(email, 'Email Address cannot be empty')
    } else if(!isEmail(emailValue)) {
        setErroFor(email, 'Please provide a valid email address')
    } else {
        setSeccessFor(email)
    }
}

function setErroFor(input, message) {
    const formControl = input.parentElement
    const paragraph = formControl.querySelector('.paragraph')

    paragraph.innerHTML = message
    formControl.className = 'form-control erro'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

function setSeccessFor(input) {
    const formControl = input.parentElement
    formControl.classList.remove('erro')

    localStorage.setItem('userEmail', email.value)

    document.location.reload(true)
}

