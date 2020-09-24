//Pagina personale Massimo Dattero

// funzioni onlclick per la gestione del menu - tratto da w3schools con mie modifiche

function apriMenu() {
  var x = document.getElementById("menu");
  var y = document.getElementById("barra-navigazione"); //aggiusta il padding della barra di navigazione - mia modifica
  if (x.style.display === "block") {
    x.style.display = "none";
	y.style.paddingBottom = "14px";  
  } else {
    x.style.display = "block";
	y.style.paddingBottom = "0";  
  }
}

function chiudiMenu() {
	var w = window.innerWidth;
	if (w < 900) {
		document.getElementById("menu").style.display = "none";
		document.getElementById("barra-navigazione").style.paddingBottom = "14px";
	}
}

// javascript per la gestione dell'accordion

function attivaBlocco(n) {
	var sez = document.getElementsByClassName("pannello");
	if (sez[n].style.display === "block") {
		sez[n].style.display = "none";
	} else {
		for (var i = 0; i < sez.length; i++) {
			sez[i].style.display = "none";
		}
		sez[n].style.display = "block";
	}
}

