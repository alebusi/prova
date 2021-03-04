function scriviTxt(car) {
  if (car == '_' ) {
    car=" ";
  }
  if (car == "x") {
    testo=testo.substring(0, testo.length - 1);
  }
  else {
    testo=document.getElementById("testo").innerHTML+car;
  }
  document.getElementById("testo").innerHTML = testo;
}
