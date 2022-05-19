let loginEl = document.getElementById('login-el')
let logoutBtn = document.getElementById('logout')

logoutBtn.addEventListener('click', () => {
    loginEl.classList.remove('hide')
    logoutBtn.classList.add('hide')
})
