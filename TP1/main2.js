let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('Envoie du form détécté !')
    })

   
 
 
 let email = document.querySelector('#email')

    if(email.value == '') {
        console.log("invalide")
        email.classList.add('error')
    }
    else {
        console.log('valide')
        email.classList.add('success')
    }

let pseudo = document.querySelector('#pseudo')

if(pseudo.value.length < 6) {
    console.log("invalide")
    pseudo.classList.add('error')
}
else {
    console.log('valide')
    pseudo.classList.add('success')
}


let passCheck = new RegExp(
   "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]) "); 

   

if(password.value.length < 8 || passCheck.test(password.value) == false) {

    if(password.value.length < 8) {
        console.log("invalide")
        password.classList.add('error')
    }
    else {
        console.log('valide')
        password.classList.add('success')
    }
}

if(password != password2) {
    console.log('valide')
    password2.classList.add('success')

} else {
    console.log("invalide")
    password2.classList.add('error')
}













        