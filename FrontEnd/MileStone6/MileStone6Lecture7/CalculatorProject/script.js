var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // whenever  a user click on any button.we will get its value through the (data-value) attributes:
    // for accessing the value of the (data-value) attribute.we have to use the (THIS) function:
    // and after that we have to use the (getAttribute) property of the javascript.with the (THIS) function.to defining or providing the name of the (attribute):
    var value = this.getAttribute("data-value");
    // after getting the values of the button: we have to gave tasks to that buttons:acc to the buttons work on the calculator:

    if (value == "reset") {
      display.innerText = null;
    }
    // IN (else-if) we work on the operators:
    else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%"
    ) {
      operator = value;
      // here we are using the (parseFloat) function.to converting the string value into the (integer)or we can say in the (floating-point)number:
      operand1 = parseFloat(display.textContent);
      display.innerText = null;
    }
    // In (else-if) we work on the (evaluation) of the values:
    else if (value === "=") {
      if (operator != null) {
        operand2 = parseFloat(display.textContent);
        // use (eval) function to get result:
        var result = eval(operand1 + " " + operator + " " + operand2);
        // and after getting result.we also have to show that result on the (display);
        display.innerText = result;
      } else {
        display.innerText = "error";
      }
    } else if (value === ".") {
      if (display.innerText.length && !display.innerText.includes(".")) {
        display.innerText += value;
      }
    }
    // IN (else) we work on the numbers:we have to show the number on the display:wherever any buddy click on the number:
    else {
      // here we are using the (+=) function: that will add the another value with the (value) that is already present on the calculator display:
      display.innerText += value;
    }
  });
}

// Gave Input through keyboard:

// Input with Keys

document.addEventListener("keypress", function (event) {
  var key;
  key = event.keyCode;
  // here we are giving those (key) values to the (value-variable) in the form of (string):
  var value = String.fromCharCode(key);
  console.log(key + " " + value);
  var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  if (
    value == "+" ||
    value == "-" ||
    value == "*" ||
    value == "/" ||
    value == "%"
  ) {
    operator = value;
    operand1 = parseFloat(display.innerText);
    display.innerText = null;
  } else if (key == "13") {
    if (operator != null) {
      operand2 = parseFloat(display.innerText);
      display.innerText = eval(operand1 + " " + operator + " " + operand2);
    } else {
      display.innerText = "Error";
    }
  } else if (value == ".") {
    if (display.innerText.length && !display.innerText.includes(".")) {
      display.innerText += value;
    }
  } else if (value in numArray) {
    display.innerText += value;
  }
});

// For Clearing display with delete Key

document.addEventListener("keydown", function (event) {
  var key;
  key = event.keyCode;

  if (key == "8") {
    display.innerText = null;
  }
});
