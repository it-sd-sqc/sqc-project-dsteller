
/*
let toggleBtn = document.getElementById('style-toggle')

window.onload = function () {
    const styleToggle = document.getElementById('style-toggle')
    styleToggle.addEventListener('click',
      function (event) {
        event.preventDefault()
        window.alert('Toggling dark and light mode not yet implemented.')
      }
    )
  }
  */

function darkMode() {
  let element = document.body
  element.classList.toggle('dark')
}
