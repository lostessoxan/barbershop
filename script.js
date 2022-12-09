var menuBtn = document.getElementById('menuBtn')
        var sideNav = document.getElementById('sideNav')
        var menu = document.getElementById('menu')

        sideNav.style.right = '-250px'

        menuBtn.onclick = () => {
            if(sideNav.style.right == '-250px') {
                sideNav.style.right = '0'
                menu.src = '../images/close.png'
            }
            else {
                sideNav.style.right = '-250px'
                menu.src = '../images/menu.png'
            }
}

// =================

const container = document.querySelector('.container'),
      signUp = document.querySelector('.signup-link'),
      login = document.querySelector('.login-link'),
      registerBtn = document.querySelector('.btns .register'),
      loginBtn = document.querySelector('.btns .login'),
      modal = document.querySelector('.modal'),
      closeBtn = document.getElementById('closeBtn')

signUp.addEventListener('click', () => {
    container.classList.add("active")
})

login.addEventListener('click', () => {
    container.classList.remove("active")
})

// ================

registerBtn.addEventListener('click', () => {
    modal.style.display = 'grid';
})

loginBtn.addEventListener('click', () => {
    modal.style.display = 'grid';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

// =============

