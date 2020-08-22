//funciones en JS

/*const saludar = function saludar( nombre ) {
    return `Hola, ${nombre}`;
}*/


const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

const saludar4 = ( ) => `Hola, mundo`;


console.log(saludar2('Cinthya'))
console.log(saludar3('Benjamin'));
console.log(saludar4());

const getUser = () => ({
        id:'12ASD2',
        username: 'El_benja'
});

console.log( getUser() )