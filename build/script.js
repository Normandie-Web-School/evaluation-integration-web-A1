const burger = document.querySelector('.burger')

burger.addEventListener('click', toggleMenu)

function toggleMenu () {
  const nav = document.querySelector('#main-nav')
  nav.classList.toggle('is-open')
}
