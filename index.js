// // const numero = prompt('Digite um número:')
// // if(numero > 0) {
// //     document.write(`o ${numero} é maior que 0`);
// // } else if (numero <0) {
// //     document.write(`o ${numero} é menor que 0`);
// // } else {
// //     document.write(`o numero é igual a 0`);
// // }

// // const LadoA = prompt('Digite o Lado 1:')
// // const LadoB = prompt('Digite o Lado 2:')
// // const LadoC = prompt('Digite o Lado 3:')
// // if(LadoA == LadoB && LadoB == LadoC){
// //     document.write(`O triangulo é equilatero`);
// // } else if(LadoA == LadoB || LadoA == LadoC || LadoB == LadoC){
// //     document.write(`O triangulo é isosceles`);
// // } else{
// //     document.write(`O triangulo é escaleno`);
// // }

// const ano = prompt('Digite um numero:')
// if(ano %4 == 0){
// document.write(`${ano} é um ano bissexto`);
// } else {
//     document.write(`${ano} não é um ano bissexto`)
// }

// const primeiroNumero = prompt ('Digite o primeiro número:'); 
// const segundoNumero = prompt ('Digite o segundo número:'); 
// const terceiroiroNumero = prompt ('Digite o terceiro número:'); 
// if(primeiroNumero > segundoNumero && primeiroNumero > terceiroiroNumero){
//     document.write(`${primeiroNumero} é o maior número`);
// }
// else if(segundoNumero > primeiroNumero && segundoNumero > terceiroiroNumero){
//     document.write(`${segundoNumero} é o maior número`);
// }
// else {
//     document.write(`${terceiroiroNumero} é o maior número`);
// }

// const numero = prompt('Digite um numero:')
// if(numero %2 == 0){
// document.write(`${ numero} é par`);
// } else {
//     document.write(`${numero} é impar`);
// }

// const qtd = prompt('Digite a quantidade de produtos vendidos: ');
// const preco = prompt('Digite o preco do produto');
// let total;

// if(qtd > 10){
//     total = qtd * (preco - (preco * 0.1));
//     document.write(`O total a ser pago sera de R$${total}`)
// } else {
//     total = qtd * preco;
//     document.write(`O total a ser pago sera de R$${total}`)
// }

// const nota = prompt('Digite a nota:');

// if (nota > 0) {
//     document.write(`O conceito da sua ${nota} é F`);
// } else if (nota > 20) {
//     document.write(`O conceito da sua ${nota} é D`);
// } else if (nota > 40) {
//     document.write(`O conceito da sua ${nota} é C`);
// } else if (nota > 60) {
//     document.write(`O conceito da sua ${nota} é B`);
// } else if (nota > 80 && nota <= 100) {
//     document.write(`O conceito da sua ${nota} é A`);
// }

// let letra = prompt ('Digite uma letra');
// let vogais = 'AEIOUaeiou';
// let consoantes = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
// vogais = vogais.split('');
// consoantes = consoantes.split('');

// console.log(vogais)
// if(vogais.includes(letra)){
//     document.write(`a letra ${letra} é uma vogal`);
// } else if (consoantes.includes(letra)){  
//     document.write(`a letra ${letra} é uma consoante`);
//     } else{
//         alert(`o caracter ${letra} não é uma letra`);
//     }


// let dia = prompt ('Digite um número');
// if(dia == '1'){
//     document.write(`Domingo`);
// }else if(Dia == '2'){
//     document.write(`Segunda-Feira`);
// }else if(Dia == '3'){
//     document.write(`Terca-Feira`);
// }else if(Dia == '4'){
//     document.write(`Quarta-Feira`);
// }else if(Dia == '5'){
//     document.write(`Quinta-Feira`);
// }else if(Dia == '6'){
//     document.write(`Sexta-Feira`);
// }else if(Dia == '7'){
//     document.write(`Sábado`);
// // }
        
// const valor = prompt('Digite sua renda anual:');

// if (valor >= 24511.93 && valor <= 33919.80){
//     document.write(`Seu imposto de renda é de R$ 1838.39`);
// } else if (valor >= 33919.81 && valor <= 45012.60){
//     document.write(`Seu imposto de renda é de R$ 4382.38`);
// } else if (valor >= 45012.61 && valor <= 55976.16){
//     document.write(`Seu imposto de renda é de R$ 7758.32`);
// } else if (valor > 55976.16){
//     document.write(`Seu imposto de renda é de R$ 10557.13`);
// } else{
//     document.write(`Você é isento`)
// }