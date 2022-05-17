let signupBtn = document.getElementById('signup-btn')
let errorTxt = document.getElementById('error-txt')
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let emailEl = document.getElementById('email')
let mailError = document.getElementById('email-error')
let contactEl = document.getElementById('contact')
signupBtn.addEventListener('click', (e) =>{
    if(firstName.value == '' || lastName.value =='' || contactEl.value == '' || emailEl.value == ''){
        errorTxt.style.display = 'block'
    }else{
        console.log(firstName.value + ' ' + lastName.value)
        validateEmail()
    }
})

let validateEmail = function(){
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(emailEl.value.match(emailFormat)){
        alert('valid')
    }else{
        mailError.style.display = 'block'
    }
}