// document.body.onkeyup = function(e) {
//     if (e.code == "Space") {
//       document.body.classList.toggle("dark");
//     }
//   }
var epicClick = 0;
var cringeClick = 0;
var pogClick = 0;
var bruhClick = 0;

function onClick1() {
    epicClick += 1;
    document.getElementById("epicClick").innerHTML = epicClick;
};

function onClick2() {
    cringeClick += 1;
    document.getElementById("cringeClick").innerHTML = cringeClick;
};

function onClick3() {
    pogClick += 1;
  document.getElementById("pogClick").innerHTML = pogClick;
};

function onClick4() {
    bruhClick += 1;
  document.getElementById("bruhClick").innerHTML = bruhClick;
};