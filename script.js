function mysel(div) {
  var suona = new Audio('campo.mp3');
  var className = div.getAttribute("class");
  var x = document.getElementsByClassName("giallo");
  if (x.length > 0) {
     x[0].className = "bianco";
  }
  if (className=="bianco") {
      div.className = "giallo";
       }
  else if (className == "giallo") {
       div.className = "bianco";
       }
  suona.play();
}

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
