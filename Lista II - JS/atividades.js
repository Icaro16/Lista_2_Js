1-
var numero1 = Number(prompt("Digite o primeiro número:"));
var numero2 = Number(prompt("Digite o segundo número:"));

let multiplicacao = numero1 * numero2;

console.log("A multiplicação dos números é: " + multiplicacao);

2-
var anoNascimento = Number(prompt("Digite o ano do seu nascimento (YYYY):"));
var anoAtual = Number(prompt("Digite o ano atual (YYYY):"));

let idadeAnos = anoAtual - anoNascimento;
let idadeMeses = idadeAnos * 12;
let idadeDias = idadeAnos * 365;
let idadeSemanas = idadeDias / 7;

console.log("Idade em anos: " + idadeAnos);
console.log("Idade em meses: " + idadeMeses);
console.log("Idade em dias: " + idadeDias);
console.log("Idade em semanas: " + idadeSemanas);

3-
var temperaturaCelsius = Number(prompt("Digite a temperatura em graus Celsius:"));

let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log("A temperatura em graus Fahrenheit é: " + temperaturaFahrenheit.toFixed(2));

4-
var totalEleitores = Number(prompt("Digite o número total de eleitores:"));
var votosCandidatoX = Number(prompt("Digite o número de votos do candidato X:"));
var votosCandidatoY = Number(prompt("Digite o número de votos do candidato Y:"));
var votosBrancos = Number(prompt("Digite o número de votos brancos:"));
var votosNulos = Number(prompt("Digite o número de votos nulos:"));

let percentualCandidatoX = (votosCandidatoX / totalEleitores) * 100;
let percentualCandidatoY = (votosCandidatoY / totalEleitores) * 100;
let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;

console.log("Percentual de votos do candidato X: " + percentualCandidatoX.toFixed(2) + "%");
console.log("Percentual de votos do candidato Y: " + percentualCandidatoY.toFixed(2) + "%");
console.log("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");

5-
var peso = Number(prompt("Digite seu peso em quilogramas:"));
var altura = Number(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

6-
var quantidadePlastico = Number(prompt("Digite a quantidade em kg de plástico a ser entregue:"));
var quantidadePapel = Number(prompt("Digite a quantidade em kg de papel a ser entregue:"));
var quantidadeMetal = Number(prompt("Digite a quantidade em kg de metal a ser entregue:"));

const valorPlastico = 2.00;
const valorPapel = 3.00;
const valorMetal = 5.00;

let totalPlastico = Math.floor(quantidadePlastico / 10) * valorPlastico;
let totalPapel = Math.floor(quantidadePapel / 30) * valorPapel;
let totalMetal = Math.floor(quantidadeMetal / 50) * valorMetal;

let totalRecebido = totalPlastico + totalPapel + totalMetal;

console.log("O valor total a ser recebido é: R$" + totalRecebido.toFixed(2));

7-
var convidados = 45;
var litrosChopp = 300;

let litrosDesperdicados = Number(prompt("Digite a quantidade de litros de chopp desperdiçados (digite 0 se não houve desperdício):"));
let litrosSobraram = Number(prompt("Digite a quantidade de litros de chopp que sobraram (digite 0 se não sobrou chopp):"));

let litrosConsumidos = litrosChopp - litrosDesperdicados - litrosSobraram;
let mediaLitrosPorPessoa = litrosConsumidos / convidados;

console.log("A média de litros bebidos por pessoa na festa foi de: " + mediaLitrosPorPessoa.toFixed(2) + " litros");
