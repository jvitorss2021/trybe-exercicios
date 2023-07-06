let salario = 3000

let inss;
let ir;

if (salario <= 1556.94){
    inss = salario * 0.08;
}else if (salario <= 2594.92){
    inss = salario * 0.09;
}else if ( salario <= 5189.82){
    inss = salario * 0.11;
}else {
    inss = 570.88
}
let salariobase = salario - inss;

if (salariobase <= 1903.98){
    ir = 0;
}else if (salariobase <=2826.65){
    ir = (salariobase * 0.075) - 142.80;
}else if (salariobase <=3751.05){
    ir = (salariobase * 0.15) - 354.80;
}else if (salariobase <= 4664.69){
    ir = (salarobase * 0.225) - 636.13;
}else {
    ir = (salariobase * 0.275) - 869.36;
}
console.log("R$" + (salariobase - ir));