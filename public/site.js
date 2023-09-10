window.onload = function () {
    const styleToggle = document.getElementById('style-toggle')
    styleToggle.addEventListener('click',
      function (event) {
        event.preventDefault()
        window.alert('Toggling dark and light mode not yet implemented.')
      }
    )

    $('#style-toggle').on('click', function () {
        if ($('body').hasClass('dark')) {
          $('body').removeClass('dark')
          $('h2, h3').removeClass('dark')
          $('header').removeClass('dark-accent')
          $('nav').removeClass('dark-accent')
        } else {
          $('body').addClass('dark')
          $('h2, h3').addClass('dark')
          $('header').addClass('dark-accent')
          $('nav').addClass('dark-accent')
        }
    })
}

