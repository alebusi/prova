var intestazione='<svg viewBox="0 0 100 100"> <path d=\"';
var coda="\" /></svg>";
var testo="";

function scriviTxt(car) {
  if (car == "x") {
    testo=testo.substring(0, testo.length - 1);
  }
  else if (car == '<') {
    testo=testo+intestazione;
  }
  else if (car == ">") {
    testo=testo+coda;
  }
  else {
    testo=testo+car;
  }
  document.getElementById("testo").innerHTML = testo;
}
