// ####### INTRODUÇÃO A JAVASCRIPT #######

// ####### VARIAVEIS E TIPOS DE DADOS
var numero = 15;
var numer2 = 20.5;
var texto = "Olá mundo!";

var itens = ["Item1", "Item2", 55];

itens[1];

// ####### OPERAÇÕES

var n1 = 5;
var n2 = 6;

var soma = n1 + n2; // - * /

// ####### Estrutura Condicional (IF)

var nota = 4

if (nota < 7) {
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}

// ####### Estrutura de repetição 
    // FOR
for (var item in itens) {
    console.log(itens[item])
}

for (var i = 0; i < 10; i++){
    console.log(i)
}
    // WHILE

var i = 0;

while( i < 5){
    console.log(i);
    i = i+1;
}
// ####### DOM (Modelo de Objeto de Documento)
    // document.getElementById("IdDoElemento")
    // document.querySelector("Elemento");

var titulo = document.getElementById("titulo1")
titulo.textContent = "novo titulo"

// ####### EVENTOS
    // onclick, onmouseover, etc...
// ####### FUNÇÕES
    // Alterar cor
function changeColor(cor){
    var titulo = document.getElementById("titulo1");
    titulo.style.color = cor;
}
    // Função para mostrar alert

function mostraAlertaExcluir() {
    alert("Excluido com sucesso!")
}

var botaoexcluir = document.querySelector("#excluir");

botaoexcluir.onclick = mostraAlertaExcluir; 

// ####### FORMULÁRIOS

function verificaNota(){
    var nota = document.getElementById("nota");

    if (nota.value == "") {
        alert("informe a nota")
    } else if (nota.value < 7) {
        alert("Reprovado");
    } else {
        alert("Aprovado");
    }
}