let loginBtn = document.getElementById('login')
let emailEl =document.getElementById('email')
let passEl = document.getElementById('pswd')
let errorTxt = document.getElementById('error-txt')

loginBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(emailEl.value == '' && passEl == ""){
        errorTxt.style.display = 'block'
    }else{
        window.location.href = "../../index.html"    
    }

})
