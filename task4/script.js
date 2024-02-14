var TextN = document.querySelector("#Text");
function text() {
    var textInfo = prompt("Введите текст");
    TextN.textContent = textInfo;
}
TextN.addEventListener('click', text);