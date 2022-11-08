let screen = document.getElementById("screen");

function btnclick(value) {
  screen.value += value;
}
function ClearScreen() {
  screen.value = " ";
}
function findResult() {
  let result = eval(screen.value);
  screen.value = result;
}
