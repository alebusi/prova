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
  testo=document.getElementsById("testo")+car;
  document.getElementsById("testo").innerHTML = testo;
}
