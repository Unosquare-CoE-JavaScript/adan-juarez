const button1 = document.querySelector("button");
const input11 = document.getElementById("num1");
const input21 = document.getElementById("num2");

function adding(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(adding(input11.value, input21.value));
});