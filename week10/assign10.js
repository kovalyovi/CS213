function formSubmit(event) {
  event.preventDefault();
  let homeUrl = `/cgi-bin/cs213/mileageAjaxJSON`;

  let startCity = document.getElementById("startCity").value;
  let startState = document.getElementById("startState").value;
  let endCity = document.getElementById("endCity").value;
  let endState = document.getElementById("endState").value;

  let url = `${homeUrl}?startCity=${startCity}&startState=${startState}&endCity=${endCity}&endState=${endState}`;
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      displayData(JSON.parse(this.response));
    } else {
      displayError(this.responseText);
    }
  };

  request.open('GET', url, true);

  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  request.setRequestHeader('Access-Control-Allow-Methods', '*');
  request.setRequestHeader('Access-Control-Allow-Headers', 'api-key,content-type');
  request.setRequestHeader('Access-Control-Allow-Credentials', true);
  request.setRequestHeader('Content-Type', 'application/json');

  request.send();
  // displayData("");
}

function displayError(message) {
  document.getElementById("output").innerHTML = `<p class="error">Unfortunately, the request didn't go through.. try something else</p>`;
}

function displayData(data) {
  // data = JSON.parse(`{"trip" : 
  //   { "startcity" : "Denver",
  //     "startstate" : "CO",
  //     "endcity" : "Seattle",
  //     "endstate" : "WA",
  //     "miles" : "1303", 
  //     "tmode" : 
  //   [ 
  //     "Plane",
  //     "Car",
  //     "Bus",
  //     "Bike",
  //     "Foot"
  //   ]

  //   }
  // }`);

  data = data.trip;

  let output = document.getElementById("output");

  let html = `
  <h3>Results for your trip:</h3>
  <p>The distance between ${data.startcity}, ${data.startstate} and 
    ${data.endcity}, ${data.endstate} is ${data.miles} miles.</p>
  <ul>`;

  if (data.miles === "Unknown") {
    output.innerHTML = html + `<p class="error">Unfortunately, The distance between ${data.startcity}, ${data.startstate} and ${data.endcity}, ${data.endstate} is ${data.miles}.. Try something else</p>`;
  }

  for (let item of data.tmode) {
    html += `<li>${item}</li>`;
  }
  html += `</ul>`;

  output.innerHTML = html;
}


function capitalize(e) {
  e.value = e.value.toUpperCase();
  console.log(e);
}