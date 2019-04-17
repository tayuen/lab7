function init() {

var button = document.getElementById("entrybutton");

var message = document.getElementById("entryinput");

button.addEventListener("click", function() {
  alert ("THON AYUEN: " + message.value);
  document.getElementById("textoutput").innerHTML = message.value;
});
}
window.addEventListener('load', init);