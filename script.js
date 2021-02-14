//where is my problem 
function add() {
var text = prompt();
  var h5 = document.createElement("h5");
  var main = document.getElementsByTagName('main');
  var div = document.createElement("div")
  main.appendChild(div);
    div.appendChild(h5);
      h5.appendChild(document.createTextNode(text))}
