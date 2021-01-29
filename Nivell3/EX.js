var valor1 = 0;
var valor2 = 0;
var operacion;

function log(numero){
  if(valor1==0 && valor1 !== '0.'){
      valor1 = numero;
  }else{
      valor1 += numero;
  }
  refrescar();
}

function C(){
  valor1 = 0;
  valor2 = 0;
  refrescar();
}

function operar(valor) {
  if (valor1 == 0){
      valor1 = parseFloat(document.getElementById("valorNumero").value);
  }valor2 = parseFloat(valor1);
  valor1 = 0; 
  operacion = valor;
}

function calcular() {
  valor1 = parseFloat(valor1);  
    switch (operacion) {
      case 1:
        valor1 = (valor1 + valor2); 
        console.log(valor1);
        break;
      case 2:
        valor1 = (valor2 - valor1);
        console.log(valor1);
        break;
      case 3:
        valor1 = (valor1 * valor2);
        console.log(valor1);
        break;
      case 4:{
        if(valor1 === 0){
           console.log('error')
           valor1 = "error"
           setTimeout(()=> { // codigo para poner la calculadora a 0 despues de 1.5 segundos
            if (valor1 === "error")
            C()
         },1500);
        } else {
          valor1 = (valor2 / valor1);
           console.log(valor1);
        }
        break;
      }
    }
    refrescar(); // necesaria para actualizar display con resultado 
  
}

function refrescar(){
  document.getElementById("valorNumero").value = valor1;
}