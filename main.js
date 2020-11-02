let valorInicial = valor = gets();
let notas100 = notas50 = notas20 = notas10 = notas5 = notas2 = notas1 = resto = 0;

if (valor % 100 >= 0) {
    resto = valor % 100;
    notas100 = (valor - resto) / 100;
    valor = resto;
}

if (valor % 50 >= 0) {
    resto = valor % 50;
    notas50 = (valor - resto) / 50;
    valor = resto;
}

if (valor % 20 >= 0) {
    resto = valor % 20;
    notas20 = (valor - resto) / 20;
    valor = resto;
}

if (valor % 10 >= 0) {
    resto = valor % 10;
    notas10 = (valor - resto) / 10;
    valor = resto;
}

if (valor % 5 > 0) {
    resto = valor % 5;
    notas5 = (valor - resto) / 5;
    valor = resto;
}

if (valor % 2 >= 0) {
    resto = valor % 2;
    notas2 = (valor - resto) / 2;
    valor = resto;
}

if (valor % 1 == 0) {
    resto = valor % 1;
    notas1 = (valor - resto) / 1;
    valor = resto;
}

console.log(valorInicial);
console.log(notas100 + " nota(s) de R$ 100,00");
console.log(notas50 + " nota(s) de R$ 50,00");
console.log(notas20 + " nota(s) de R$ 20,00");
console.log(notas10 + " nota(s) de R$ 10,00");
console.log(notas5 + " nota(s) de R$ 5,00");
console.log(notas2 + " nota(s) de R$ 2,00");
console.log(notas1 + " nota(s) de R$ 1,00");
