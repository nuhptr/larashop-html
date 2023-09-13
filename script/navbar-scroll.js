// make this function to make navbar have background color when scroll
$(function () {
  $(document).scroll(function () {
    let $nav = $('.navbar-fixed-top')
    $nav.toogleClass('scrolled', $(this).scrollTop() > $nav.height())
  })
})
