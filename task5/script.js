let tElement;
let input = document.getElementById("input");
let text = document.getElementById("duplicateField");
input.onkeyup = function() {
  tElement = input.value;
  text.textContent = tElement;
};
input.onkeyup();
document.querySelector('.btn').addEventListener('click', function() {
  let btn = tElement;
  console.log(btn);
});
 document.querySelector('.btn').addEventListener('click', function(event) {
  input.value = event.preventDefault();
});
document.querySelector('.btn').addEventListener('click', function(event) {
  text.textContent = event.preventDefault();
});
document.querySelector(".Btn1").addEventListener('click', function() {
  input.value = "";
});