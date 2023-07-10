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
 