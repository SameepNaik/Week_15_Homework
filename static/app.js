// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

// YOUR CODE HERE!
function getDate() {
  var inputDate = document.getElementById("datetime");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += inputDate.elements[i].value;
  }
  console.log(text)
  return text
}

function fillTable() {
    var table = document.getElementById("ufo-table");
    var column = table.insertColumn(0);
    var datetime = column.insertCell(0);
    var city = column.insertCell(1);
    var state = column.insertCell(2);
    var country = column.insertCell(3);
    var shape = column.insertCell(4);
    var durationMinutes = column.insertCell(5);
    var comments = column.insertCell(6);
    datetime.innerHTML = " ";
    city.innerHTML = " ";
    state.innerHTML = " ";
    country.innerHTML = " ";
    shape.innerHTML = " ";
    durationMinutes.innerHTML = " ";
    comments.innerHTML = " ";
}

//pull date from input on webpage
var filterBtn = d3.select("btn btn-default");
filterBtn.on("click", function() {

  // Prevent the page from refreshing
	d3.event.preventDefault();

  // Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");

  // Get the value property of the input element
	var inputValue = inputElement.property("value");

	console.log(inputValue);
});