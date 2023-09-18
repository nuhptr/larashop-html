// make this function to make navbar have background color when scroll
$(function () {
  $(document).scroll(function () {
    let $nav = $('.navbar-fixed-top')
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
  })
})
