document.querySelector('#tirar').onclick = function () {
  document.getElementById('primer_dado').style.animationName = '';
  var segundo_dado = document.getElementById('segundo_dado');
  if (segundo_dado) {
    segundo_dado.style.animationName = '';
  }
  setTimeout(function() {
    var tirada = Math.floor((Math.random() * 6) + 1);
    if (tirada === 1) {
      document.getElementById('primer_dado').style.animationName = 'cubo_escudo_blanco';
    }
    if (tirada === 2) {
      document.getElementById('primer_dado').style.animationName = 'cubo_escudo_negro';
    }
    if (tirada === 3) {
      document.getElementById('primer_dado').style.animationName = 'cubo_calavera';
    }
    if (tirada === 4) {
      document.getElementById('primer_dado').style.animationName = 'cubo_calavera';
    }
    if (tirada === 5) {
      document.getElementById('primer_dado').style.animationName = 'cubo_escudo_blanco';
    }
    if (tirada === 6) {
      document.getElementById('primer_dado').style.animationName = 'cubo_calavera';
    }
    if (segundo_dado) {
      var tirada = Math.floor((Math.random() * 6) + 1);
      if (tirada === 1) {
        document.getElementById('segundo_dado').style.animationName = 'cubo_escudo_blanco';
      }
      if (tirada === 2) {
        document.getElementById('segundo_dado').style.animationName = 'cubo_escudo_negro';
      }
      if (tirada === 3) {
        document.getElementById('segundo_dado').style.animationName = 'cubo_calavera';
      }
      if (tirada === 4) {
        document.getElementById('segundo_dado').style.animationName = 'cubo_calavera';
      }
      if (tirada === 5) {
        document.getElementById('segundo_dado').style.animationName = 'cubo_escudo_blanco';
      }
      if (tirada === 6) {
        document.getElementById('segundo_dado').style.animationName = 'cubo_calavera';
      }
    }
  }, 15);
};
