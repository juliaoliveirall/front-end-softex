// questão 1
console.log("estudar é muito bom!");
console.log("paciência e persistência");
console.log("revisão é a mãe do aprendizado");
console.log("estudar é muito bom!");
console.log("paciência e persistência");
console.log("revisão é a mãe do aprendizado");
console.log("estudar é muito bom!");
console.log("paciência e persistência");
console.log("revisão é a mãe do aprendizado");
// questão 2
function criarFrases() {
    console.log("estudar é muito bom!");
    console.log("paciência e persistência");
    console.log("revisão é a mãe do aprendizado");
}
criarFrases();
criarFrases();
criarFrases();
// questão 3
function soma(num1, num2) {
    console.log(num1 + num2);
}
soma(10, 15);
soma(10, 20);
soma(30, 50);
// questão 5
function soma1(a, b) {
    return (a + b);
}
soma1(35, 25);
soma1(30, 40);
// questão 6
function isPar(numeroInteiro) {
    return numeroInteiro % 2 === 0;
}
console.log(isPar(2));
console.log(isPar(5));
// questão 7
function mediaArit(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3 / 3);
}
mediaArit(10, 9, 7);
mediaArit(6, 6, 8);
// questão 8
function imc(peso, altura) {
    return (peso / Math.pow(altura, 2));
}
imc(67, 1.60);
imc(70, 1.68);
// questão 9
function calcularDesconto(valorProduto, desconto) {
    var percentualDesconto = (valorProduto * desconto) / 100;
    return (valorProduto - percentualDesconto);
}
calcularDesconto(150, 20);
calcularDesconto(200, 35);
// questão 10
function calcularImpostoRenda(salarioBruto) {
    var imposto = 0;
    if (salarioBruto <= 1903.98) {
        imposto = 0;
    }
    else if (salarioBruto <= 2826.65) {
        imposto = (salarioBruto - 1903.98) * 0.075;
    }
    else if (salarioBruto <= 3751.05) {
        imposto = (salarioBruto - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    }
    else if (salarioBruto <= 4664.68) {
        imposto = (salarioBruto - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    }
    else {
        imposto = (salarioBruto - 4664.68) * 0.275 + (4664.68 - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    }
    return imposto;
}
console.log(calcularImpostoRenda(1500));
console.log(calcularImpostoRenda(2500));
console.log(calcularImpostoRenda(3200));
// questão 11
function calcularMediaArredondada(numeros) {
    return Math.round(numeros.reduce(function (a, b) { return a + b; }, 0) / numeros.length);
}
console.log(calcularMediaArredondada([7, 8, 9]));
console.log(calcularMediaArredondada([10, 5, 6]));
console.log(calcularMediaArredondada([1, 2, 3, 4]));
function calcularMediaAlunos(alunos) {
    var somaNotas = alunos.reduce(function (total, aluno) { return total + aluno.nota; }, 0);
    return somaNotas / alunos.length;
}
var listaAlunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 8.5 },
    { nome: "Pedro", nota: 6 },
    { nome: "Ana", nota: 9 }
];
console.log(calcularMediaAlunos(listaAlunos));
// questão 14
function calcularIdade(nascimento) {
    return (2024 - nascimento);
}
calcularIdade(2003);
calcularIdade(2007);
// questão 15
function gerarTabuada(numero) {
    return [
        1 * numero,
        2 * numero,
        3 * numero,
        4 * numero,
        5 * numero,
        6 * numero,
        7 * numero,
        8 * numero,
        9 * numero,
        10 * numero
    ];
}
gerarTabuada(5);
// questão 16
// questão 17 
function verificarPropriedade(obj, prop) {
    return obj.hasOwnProperty(prop);
}
var pessoa = {
    nome: "flora",
    idade: 40,
    profissao: "médica"
};
console.log(verificarPropriedade(pessoa, "nome"));
console.log(verificarPropriedade(pessoa, "endereco"));
// questão 18
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    var lucro = (valorCusto * margemLucro) / 100;
    var precoVenda = valorCusto + lucro + valorFrete;
    return precoVenda;
}
console.log(calcularPrecoProduto(100, 20, 15));
console.log(calcularPrecoProduto(50, 50, 10));
// questão 19
function palavraLonga(frase) {
    var palavras = frase.split(' ');
    var palavraLonga = palavras.reduce(function (longest, current) {
        return current.length > longest.length ? current : longest;
    }, '');
    return palavraLonga;
}
console.log(palavraLonga("tutorial de desenvolvimento da web"));
// questão 20
// questão 21
function stringsLongas(strings) {
    return strings.filter(function (str) { return str.length > 5; });
}
var arrayStrings = ['maçã', 'banana', 'tangerina', 'manga'];
console.log(stringsLongas(arrayStrings));
