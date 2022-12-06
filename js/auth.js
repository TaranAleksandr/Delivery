const btnAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const btnOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const closeAuth = modalAuth.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')


const login = (user) => {
  btnAuth.style.display = 'none'
  btnOut.style.display = 'block'
  userName.style.display = 'block'
  userName.textContent = user.login
  modalAuth.style.display = ''
}

const logout = () => {
  btnAuth.style.display = 'flex'
  btnOut.style.display = 'none'
  userName.style.display = 'none'
  userName.textContent = ''
  localStorage.removeItem('user')
}

btnAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex'
})

btnOut.addEventListener('click', () => {
  logout()
})

closeAuth.addEventListener('click', () => {
  modalAuth.style.display = ''
})

logInForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const user = {
    login: inputLogin.value,
    password: inputPassword.value
  }
  localStorage.setItem('user', JSON.stringify(user))

  login(user)
})

if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')));
}