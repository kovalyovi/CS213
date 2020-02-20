$('#scroll-up').hide();

$(function () {
  $("#header").load("../lib/header.html");
});

$(window).scroll(e => {
  if ($(window).scrollTop() != 0) {
    if ($('#scroll-up').is(':hidden')) {
      $('#scroll-up').show();
    }
  } else {
    $('#scroll-up').hide();
  }
});


//form.reportValidity()
//.setCustomValidity("asdf")