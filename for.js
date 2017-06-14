/**
 * Created by srosales on 12/02/17.
 */
var number = 1;
var sum = 0;
for (var number = 1; number < 11; number++) {
    sum += number;
}
console.log(sum);

//Acceso a elementos de un arreglo
var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}
console.log(sum);