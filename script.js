

// 1. Ejercicios destructuring
// 1. Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae la empleada Ana completa
// {"name":"Ana", "email":"Ana@gmail.com"}

let [x, y, z] = empleados;
console.log(y);

// // Extrae el email del empleado Luis --> Luis@gmail.com

console.log(x.email);





// 2. Usa destructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;

// Al final
// let a = 3;
// let b = 5;

[a, b] = [b, a];
console.log(a, b);





// 3. Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);





/*---------------------------------------------------------------------------------------*/
// 2. Ejercicios spread/rest
// 1. Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
function sumEveryOther(x, y, ...z) {
    let sumTotal = x + y;
    for (let i = 0; i < z.length; i++) {
        sumTotal += z[i];
    }
    return sumTotal;
}

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26




// 2. Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
function addOnlyNums(...rest) {
    let sumNums = 0;
    for (let i = 0; i < rest.length; i++) {
        if (parseInt(rest[i]) > 0) {
            sumNums += rest[i];
        }
    }
    return sumNums
}


addOnlyNums(1, "perro", 2, 4); //7





// 3.Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
function countTheArgs(...rest) {
    return rest.length;
}

countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4





// 4. Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
const aName = ['Noemy', 'Xicu', 'Llara'];
const aAge = [39, 9, 6];
let aCombine = combineTwoArrays(aName, aAge);
console.log(aCombine);





// 5. Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
function onlyUniques(...rest) {
    let aUniques = [];
    for (let i = 0; i < rest.length; i++) {
        if ((i == 0) || (rest[i] != rest[i - 1])) {
            aUniques.push(rest[i]);
        }
    }
    return aUniques;
}

onlyUniques("gato", "pollo", "cerdo", "cerdo"); //['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]





// 6. Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
function combineAllArrays(...rest) {
    let aCombine = [];
    for (let i = 0; i < rest.length; i++) {
        aCombine = [...aCombine, ...rest[i]];
    }
    return aCombine;
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


// 7.Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare(...rest) {
    let sumTotal = 0;
    for (let num of rest) {
        let nSquare = num ** 2;
        sumTotal += nSquare
    }
    return sumTotal;
}
sumAndSquare(3, 6, 7, 8, 2);
