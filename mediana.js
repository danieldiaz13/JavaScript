function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

const lista1 = [
    100,
    200,
    500,
    400000,
];


const mitadLiata1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const Array = [100, 200, 500, 400000,];
Array.sort();
console.log(Array);

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLiata1 - 1];
    const elemento2 = lista1[mitadLiata1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    mediana = promedioElemento1y2;
    // ne
    // el promedio
    // media
} else {
    mediana = lista1[mitadLiata1];
}