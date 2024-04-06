$(document).ready(function () {
  $(".drawer_button").click(function () {
    $(".drawer_nav_wrapper").toggleClass("open");
    $(".drawer_bg").fadeToggle();
  });

  $(".drawer_bg").click(function () {
    $(".drawer_nav_wrapper").removeClass("open");
    $(".drawer_bg").fadeOut();
  });
});
