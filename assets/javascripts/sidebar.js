$(document).ready(function () {
  $('#sidebar').hide()

  $('#dismiss, .overlay').on('click', function () {
    // hide sidebar
    $('#sidebar').hide()
    // hide overlay
    $('.overlay').removeClass('active')
  })

  $('.sidebarCollapse').on('click', function () {
    // open sidebar
    $('#sidebar').show()
    // fade in the overlay
    $('.overlay').addClass('active')
    $('.collapse.in').toggleClass('in')
    $('a[aria-expanded=true]').attr('aria-expanded', 'false')
  })
})
