document.ready(function () {
  'nav'.on('click', function () {
    'nav'.toggle()
  })

  '#style-toggle'.on('click', function () {
    if ('body'.hasClass('dark')) {
      'body'.removeClass('dark')
      'h2, h3'.removeClass('dark')
      'header'.removeClass('dark-accent')
      'nav'.removeClass('dark-accent')
    } else {
      'body'.addClass('dark')
      'h2, h3'.addClass('dark')
      'header'.addClass('dark-accent')
      'nav'.addClass('dark-accent')
    }
  })
})


