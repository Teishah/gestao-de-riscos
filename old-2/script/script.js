
var YY = 2020;
var MM = 11;
var DD = 25;
var HH = 18;
var MI = 59;
var SS = 59;
var ativarPopup = true;

let div = document.querySelector('body');

div.addEventListener('mouseleave', function () {
  if (ativarPopup) {
    document.getElementById('modal').classList.remove('lightbox-none');
    document.getElementById('modal').classList.add('lightbox');
    ativarPopup = false;
  }

})

atualizaContador();

function atualizaContador() {
  var hoje = new Date();
  var futuro = new Date(YY, MM - 1, DD, HH, MI, SS);
  var ss = parseInt((futuro - hoje) / 1000);
  var mm = parseInt(ss / 60); var hh = parseInt(mm / 60);
  var dd = parseInt(hh / 24);
  ss = ss - (mm * 60);
  mm = mm - (hh * 60);
  hh = hh - (dd * 24);
  var dias = '';
  var horas = '';
  var minutos = '';
  var segundos = '';
  dias += (dd && dd > 1) ? dd : (dd == 1 ? '1 ' : '0');
  horas += (toString(hh).length) ? hh : '';
  minutos += (toString(mm).length) ? mm : '';
  segundos += ss;

  if (dd + hh + mm + ss > 0) {
    document.getElementById('contador-dia').innerHTML = dias;
    document.getElementById('contador-horas').innerHTML = horas;
    document.getElementById('contador-minutos').innerHTML = minutos;
    document.getElementById('contador-segundos').innerHTML = segundos;
    setTimeout(atualizaContador, 1000);
  }
  else {
    document.getElementById('contador').innerHTML = 'CHEGOU!!!!';
    setTimeout(atualizaContador, 1000);
  }
}

function closeModal() {
  document.getElementById('modal').classList.add('lightbox-none');
  document.getElementById('modal').classList.remove('lightbox');
}

