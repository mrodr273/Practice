$(document).ready(function() {
  // $('#myTabs a').click(function (e) {
  //   e.preventDefault()
  //   $(this).tab('show')
  // })

  $("#breakfast-btn").click(function() {
    // tabs
    $("#home-btn").removeClass('active')
    $("#breakfast-btn").addClass('active');
    $("#lunch-btn").removeClass('active')
    $("#dinner-btn").removeClass('active')
    // tabs content
    $("#home").removeClass('active show');
    $("#menu-breakfast").addClass('active show');
    $("#menu-lunch").removeClass('active show');
    $("#menu-dinner").removeClass('active show');
  });

  $("#home-btn").click(function() {
    // tabs
    $("#home-btn").addClass('active')
    $("#breakfast-btn").removeClass('active');
    $("#lunch-btn").removeClass('active')
    $("#dinner-btn").removeClass('active')
    // tabs content
    $("#home").addClass('active show');
    $("#menu-breakfast").removeClass('active show');
    $("#menu-lunch").removeClass('active show');
    $("#menu-dinner").removeClass('active show');
  });

  $("#lunch-btn").click(function() {
    // tabs
    $("#lunch-btn").addClass('active')
    $("#breakfast-btn").removeClass('active');
    $("#home-btn").removeClass('active')
    $("#dinner-btn").removeClass('active')
    // tabs content
    $("#menu-lunch").addClass('active show');
    $("#menu-breakfast").removeClass('active show');
    $("#home").removeClass('active show');
    $("#menu-dinner").removeClass('active show');
  });

  $("#dinner-btn").click(function() {
    // tabs
    $("#dinner-btn").addClass('active')
    $("#breakfast-btn").removeClass('active');
    $("#lunch-btn").removeClass('active')
    $("#home-btn").removeClass('active')
    // tabs content
    $("#menu-dinner").addClass('active show');
    $("#menu-breakfast").removeClass('active show');
    $("#home").removeClass('active show');
    $("#menu-lunch").removeClass('active show');
  });
});
