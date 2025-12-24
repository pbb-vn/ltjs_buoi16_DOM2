const display = document.getElementById("display");
const input_display = document.getElementById("input_display");
const buttons = document.querySelectorAll(".button");

function input(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
  input_display.value = display.innerText;
}

function clearDisplay() {
  display.innerText = "0";
  input_display.value = "";
}

function deleteDigit() {
  let current = display.innerText;
  current = current.slice(0, -1);

  display.innerText = current === "" ? "0" : current;
  input_display.value = display.innerText;
}

function calculate() {
  try {
    let expression = display.innerText;
    expression = expression
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-");

    let result = eval(expression);

    display.innerText = result;
    input_display.value = result;
  } catch (error) {
    display.innerText = "Lỗi";
    setTimeout(clearDisplay, 1000);
  }
}

buttons.forEach((btn) => {
  btn.onclick = () => {
    const value = btn.innerText;

    if (value === "C") {
      clearDisplay();
    } else if (value === "DEL") {
      deleteDigit();
    } else if (value === "=") {
      calculate();
    } else {
      input(value);
    }
  };
});
