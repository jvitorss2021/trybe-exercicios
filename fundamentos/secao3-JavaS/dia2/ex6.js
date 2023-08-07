const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0

for (let index = 0; index < numbers.length; index+= 1) {
    if (numbers[index] % 2 > 0 ){
    cont += 1;
    }
}
if (cont === 0){
    console.log('Nenhum valor ímpar encontrado');
}      else {
        console.log(cont);
    }

