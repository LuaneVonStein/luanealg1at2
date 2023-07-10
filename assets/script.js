peso = parseFloat(prompt('Informe o seu peso'));
altura = parseFloat(prompt('Informe sua altura'));
sexo = prompt('Informe seu sexo');
  
if (sexo === "f") { 
    feminino = 62.1 * altura -44.7;
    console.log('peso ideal é ' + peso);
  } 

else if (sexo === "m") {
    masculino = 72.7 * altura -58;
    console.log('peso ideal é ' + peso);
  }

function imprimePesoIdeal(peso) {
  alert("peso ideal :" + peso.toFixed(2));
}

function main(){
  let peso = parseFloat(prompt("Informe o peso"));
  let altura = parseFloat(prompt("Informe a altura"));
  let sexo = prompt("Informe o sexo (m/f)");

  peso = calculaPeso(peso, altura, sexo.
  toUpperCase())
  imprimePesoIdeal(peso);
}

main();
