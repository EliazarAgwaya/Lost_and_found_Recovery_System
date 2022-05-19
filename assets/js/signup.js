let signupBtn = document.getElementById('signup-btn')
let errorTxt = document.getElementById('error-txt')
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let emailEl = document.getElementById('email')
let mailError = document.getElementById('email-error')
let pass1 = document.getElementById('pass')
let pass2 = document.getElementById('retype')
let passEl = document.getElementById('pass-el')
let passError = document.getElementById('pass-error')
let contactEl = document.getElementById('contact')
let successEl = document.getElementById('success-el')
let details = []
signupBtn.addEventListener('click', () =>{
    if(firstName.value == '' && lastName.value =='' && contactEl.value == '' && emailEl.value == ''){
        errorTxt.style.display = 'block'
    }else{
        let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(emailEl.value.match(emailFormat)){
            let password = pass1.value
            let cofirmPassword = pass2.value
            if(password.length < 8 || password.length > 15){
                passEl.style.display = 'block'
            }else{
                if(password != cofirmPassword ){
                    passError.style.display = 'block'
                }else{
                    successEl.style.display = 'block'
                    window.location.href = "../pages/login.html" 
                }                
            }
         
        }else{
            mailError.style.display = 'block'
        }
         
    }


})

function showPassword(){
    if(pass1.type === "password"){
        pass1.type = "type"
    }else{
        pass1.type = "password"
    }
}