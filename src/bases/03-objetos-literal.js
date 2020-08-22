
//OBJETOS LITERALES

const persona ={
    nombre:  'Benjamin',
    apellido:  'Avila',
    edad:  23,
    direccion:{
        ciudad:  'CDMX',
        cp:  1270,
        lat:  14.55458,
        lng:  58.745,
    }
}
//console.table( persona )
console.log( persona )

const persona2 = {...persona};//operador spret para traer propiedades de persona y no 
                               //remplazar sus valores
    persona2.nombre = 'Cinthya';

console.log( persona2 )
