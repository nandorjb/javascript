var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setClima);

function setClima() {
  var escolha = select.value;

  if (escolha === 'ensolarado') {
    para.textContent = 'Eita que sol da porra!!';
  } else if (escolha === 'chuvoso') {
    para.textContent = 'Gosta de uma chuvinha nas costas?';
  } else if (escolha === 'chuvaforte') {
    para.textContent = 'Vai alagar a porra toda';
  } else if (escolha === 'nublado') {
    para.textContent = 'Ta sem sol seu viado';
  } else if (escolha === 'parcial') {
    para.textContent = 'Solzinho que não fode e não sai de cima';
  } else {
    para.textContent = '';
  }
}
