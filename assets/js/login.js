let loginBtn = document.getElementById('login')
let emailEl =document.getElementById('email')
let passEl = document.getElementById('pswd')
let errorTxt = document.getElementById('error-txt')
let passError = document.getElementById('pass-error')
let mailError = document.getElementById('mail-error')

loginBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(emailEl.value == '' || passEl.value == ''){
        errorTxt.style.display = 'block'
    }else{
        let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(emailEl.value.match(emailFormat)){
            let password = passEl.value
            if(password.length < 8 || password.length > 15){
                passError.style.display = 'block'
            }else{
                window.location.href = "../../index.html"
            }}else{
                mailError.style.display = 'block'
            }
    }
})
