//calculates the monthly loan based on input
function calculateLoan(isClicked = true) {
  //initialize the form and the output
  let form = document.getElementById("myForm");
  let output = document.getElementById("payment");

  //get fields references
  let aprRef = document.getElementById("apr");
  let termRef = document.getElementById("term");
  let amountRef = document.getElementById("amount");

  //retrieve values from fields
  apr = aprRef.value;
  term = termRef.value;
  amount = amountRef.value;

  //wait untill all fields are filled
  if (!isClicked && (apr === "" || amount === "" || term === "")) {
    return;
  }

  if (!form.checkValidity()) {

    //set custom validity
    if (!Number(apr) || Number(apr) <= 0 || Number(apr) > 25) {
      aprRef.setCustomValidity("Make sure APR is between 0.01 and 25%");
    } else {
      aprRef.setCustomValidity("");
    }

    if (!Number(term) || Number(term) <= 0) {
      termRef.setCustomValidity("Enter a whole year number");
    } else {
      termRef.setCustomValidity("");
    }

    if (!Number(amount) || Number(amount) <= 0) {
      amountRef.setCustomValidity("How much is your total?");
    } else {
      amountRef.setCustomValidity("");
    }
  }

  //upon form validity - perform calculations
  if (form.reportValidity()) {

    //first of all, get correct numbers
    apr = Number(apr) / 100 / 12;
    term = Number(term) * 12;
    amount = Number(amount);

    //calculate the result
    let result = amount * (apr * Math.pow(1 + apr, term)) / (Math.pow(1 + apr, term) - 1);

    //display the result
    output.value = (result).toFixed(2);
  }

}

//asks for confirmation before resetting the form
function confirmReset() {
  return confirm("Are you sure you want to erase the form?");
}

//JQUERY used for navigation (NOT assignment)
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