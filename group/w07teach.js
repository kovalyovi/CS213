function problem1() {
  console.log("Hello World");
}

function problem2(replaceTo, text) {
  let textField = document.getElementById("text2");
  textField.innerHTML = text.replace(/RICH_GUY/gi, replaceTo);
}

function problem3(val) {
  val = (Number(val) - 32) / 9 * 5;
  console.log(val);
}

function problem4(val) {
  let table = document.getElementsByTagName("table")[0].rows;

  for (let row of table) {
    let inner = row.cells[0].innerHTML;
    if (inner === val) {
      console.log(row.cells[1].innerHTML);
    }
  }
}

function problem5(apr, term, amount) {
  apr = Number(apr);
  term = Number(term);
  amount = Number(amount);

  let result = amount;

  for (let i = 0; i < term; i++) {
    result += result * (apr / 100)
  }
  console.log(result.toFixed(2))

}