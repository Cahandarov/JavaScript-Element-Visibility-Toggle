var box1 = document.getElementById("display1");
var box2 = document.getElementById("display2");
var box3 = document.getElementById("display3");
var box11 = document.getElementsByClassName("box1");
var box22 = document.getElementsByClassName("box2");
var box33 = document.getElementsByClassName("box3");

for (let i = 0; i < box11.length; i++) {
  box11[i].onclick = function box1Open() {
    box2.style.display = "none";
    box3.style.display = "none";
    box1.style.display = "block";
  };
}

for (let i = 0; i < box22.length; i++) {
  box22[i].onclick = function box2Open() {
    box1.style.display = "none";
    box3.style.display = "none";
    box2.style.display = "block";
  };
}

for (let i = 0; i < box33.length; i++) {
  box33[i].onclick = function box3Open() {
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "block";
  };
}
