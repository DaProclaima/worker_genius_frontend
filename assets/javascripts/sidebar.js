$(document).ready(function () {
  $('#sidebar').hide()
  $('.overlay').hide()

  $('#dismiss, .overlay').on('click', function () {
    // hide sidebar
    $('#sidebar').hide()
    // hide overlay
    $('.overlay').hide()
  })

  $('.sidebarCollapse').on('click', function () {
    // open sidebar
    $('#sidebar').show()
    // fade in the overlay
    $('.overlay').show()
  })
})
