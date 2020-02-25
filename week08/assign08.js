//ON INPUT!!!!
function checkForm(e) {
  let myForm = document.getElementById('myForm');
  myForm.classList.add('checked');

  let valid = myForm.checkValidity();

  if (valid) {
    setTimeout(() => document.getElementById('first_name').focus(), 1000);
  }

  return valid;
}

function calculateTotal(e) {
  if (e.checked) {
    updateTotal(Number(e.value));
  } else {
    updateTotal(-Number(e.value));
  }
}

function updateTotal(amount) {
  let totalField = document.getElementById('total');

  totalField.value = (Number(totalField.value) + Number(amount)).toFixed(2);
}

//asks for confirmation before resetting the form
function confirmReset() {
  let isConfirmed = confirm('Are you sure you want to erase the form?');

  if (isConfirmed) {
    document.getElementById('first_name').focus();
    form.classList.remove('checked');
  }

  return isConfirmed;
}

//JQUERY used for navigation (NOT assignment)
$('#scroll-up').hide();

$(function() {
  $('#header').load('../lib/header.html');
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
