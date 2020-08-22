//ARREGLOS EN JS
//UN ARREGLO ES:
//UNA COLECCION DE INFORMACION QUIE SE ENCUWNTRA DENTRO DE UNA MISMA VARAIBLE

const arreglo = [1,2,3,4];

let arreglo2 =[ ...arreglo, 5 ];

const arreglo3 = arreglo2.map(function(numero) { //el map sirve para poner 
    return numero * 2;               //una funcion dentro de un arreglo
    
});

console.log( arreglo )
console.log( arreglo2 )
console.log( arreglo3 )