
var tirar_1 = document.getElementById('tirar_1');
if (tirar_1) {
document.querySelector('#tirar_1').onclick = function () {
	var primer_dado = document.getElementById('primer_dado');
    	primer_dado.style.animationName = '';  
	setTimeout(function() {
		var tirada = Math.floor((Math.random() * 6) + 1);
		if (tirada === 1) {
			document.getElementById('primer_dado').style.animationName = 'cubo_calavera_1';
		}
    		if (tirada === 2) {
			document.getElementById('primer_dado').style.animationName = 'cubo_escudo_negro_2';
		}
    		if (tirada === 3) {
      			document.getElementById('primer_dado').style.animationName = 'cubo_calavera_3';
    		}
    		if (tirada === 4) {
     			document.getElementById('primer_dado').style.animationName = 'cubo_calavera_4';
    		}
    		if (tirada === 5) {
      			document.getElementById('primer_dado').style.animationName = 'cubo_escudo_blanco_5';
    		}
    		if (tirada === 6) {
      			document.getElementById('primer_dado').style.animationName = 'cubo_escudo_blanco_6';
    		}
  	}, 20);
};
}

var tirar_2 = document.getElementById('tirar_2');
if (tirar_2) {
document.querySelector('#tirar_2').onclick = function () {
	var segundo_dado = document.getElementById('segundo_dado');
	var tercer_dado = document.getElementById('tercer_dado');
    	segundo_dado.style.animationName = '';
    	tercer_dado.style.animationName = '';
	setTimeout(function() {
		var tirada_2 = Math.floor((Math.random() * 6) + 1);
		if (tirada_2 === 1) {
			document.getElementById('segundo_dado').style.animationName = 'cubo_calavera_1';
		}
    		if (tirada_2 === 2) {
			document.getElementById('segundo_dado').style.animationName = 'cubo_escudo_negro_2';
		}
    		if (tirada_2 === 3) {
      			document.getElementById('segundo_dado').style.animationName = 'cubo_calavera_3';
    		}
    		if (tirada_2 === 4) {
     			document.getElementById('segundo_dado').style.animationName = 'cubo_calavera_4';
    		}
    		if (tirada_2 === 5) {
      			document.getElementById('segundo_dado').style.animationName = 'cubo_escudo_blanco_5';
    		}
    		if (tirada_2 === 6) {
      			document.getElementById('segundo_dado').style.animationName = 'cubo_escudo_blanco_6';
    		}
                var tirada_3 = Math.floor((Math.random() * 6) + 1);
		if (tirada_3 === 1) {
			document.getElementById('tercer_dado').style.animationName = 'cubo_calavera_1';
		}
    		if (tirada_3 === 2) {
			document.getElementById('tercer_dado').style.animationName = 'cubo_escudo_negro_2';
		}
    		if (tirada_3 === 3) {
      			document.getElementById('tercer_dado').style.animationName = 'cubo_calavera_3';
    		}
    		if (tirada_3 === 4) {
     			document.getElementById('tercer_dado').style.animationName = 'cubo_calavera_4';
    		}
    		if (tirada_3 === 5) {
      			document.getElementById('tercer_dado').style.animationName = 'cubo_escudo_blanco_5';
    		}
    		if (tirada_3 === 6) {
      			document.getElementById('tercer_dado').style.animationName = 'cubo_escudo_blanco_6';
    		}
  	}, 20);
};
}

document.querySelector('#barra_iz').onclick = function () {
  document.getElementById('panel_iz').style.animationName = 'animacion_panel_iz';
};
