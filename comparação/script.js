// Validação (true/false)

var teste = '';

if (teste) {
  console.log('Campo preenchido');
} else {
  console.log('Não existe informação no campo');
}


var shoppingDone = false;

if (shoppingDone) { // don't need to explicitly specify '=== true'
  var childsAllowance = 10; // Resultado com True
} else {
  var childsAllowance = 5; // Resultado com False
}
console.log(childsAllowance);


// if.. else

var choice = 'sol';
var temperature = 27;
if (choice === 'sol') {
  if (temperature >= 37) {
    //para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
    console.log(`A temperatura atual é ${temperature} e esta muito alta`)
  } else if (temperature <= 36) {
    //para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
    console.log(`A temperatura atual é ${temperature} e esta agradavel`)
  } else if (temperature <= 27) {
    //para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
    console.log(`A temperatura atual é ${temperature} e esta baixando`)
  }
}