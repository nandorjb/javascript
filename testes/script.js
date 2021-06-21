var select = document.querySelector('select');
var para = document.querySelector('p');
var paradiv = document.querySelector('resultado');




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



function enviar() {
    var campo1 = document.getElementById('campo1').value;
    var campo2 = document.querySelector('#campo2').value;


    if (campo1 !== "" && campo2 !== "") {
        // document.getElementById("resultado").innerHTML = ``
        document.getElementById("resultado").innerHTML += `O resultado é: ${campo1} e ${campo2} <BR><BR>`;

    } else {
      document.getElementById("resultado").innerHTML = `O Preenchimento dos campos é necessário`
    }
    
}

function limpar() {
    document.getElementById("resultado").innerHTML = '';
}

function limpar1() {
    document.getElementById("resultado1").innerHTML = '';
}




function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }


function gerarArray() {
  var arrayGerado = [];
  var tamanhoArray = 7;
  var numerosSorte = [13, 36];
  var nFinal = tamanhoArray - numerosSorte.length;
  n = 0;
  arrayGerado.push(...numerosSorte);
  

    while (n < nFinal) {
        var sugestao = gerarNumeroAleatorio(60, 1);
                
            if (arrayGerado.indexOf(sugestao) === -1) {
                  arrayGerado.push(sugestao); 
                  console.log('Número gerado');
                  n++;
            } else {
              console.log('Número existente');
            }
       
    }

  console.log(arrayGerado.sort(comparaNumeros));
  document.getElementById("resultado1").innerHTML += `${arrayGerado.sort(comparaNumeros)} <BR><BR>`;
}


/* function gerar() {
    limpar1();
    let array = [7, 10, 13, 23, 24, 27, 36, 43, 54];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        // console.log(element);
        document.getElementById("resultado1").innerHTML += element + '&nbsp &nbsp &nbsp';
    }
} */


