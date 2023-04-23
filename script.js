const inputCep = document.getElementById("cep");
const btnBuscar = document.getElementById("btn-busca");

const resultadoBuscaVazia = document.querySelector(".busca-vazia");

const resultadoBuscaConcluida = document.querySelector(".busca-concluida");
const displayCep = document.querySelector(".cep");
const displayLogradouro = document.querySelector(".logradouro");
const displayBairro = document.querySelector(".bairro");
const displayCidade = document.querySelector(".cidade");
const displayEstado = document.querySelector(".estado");

const resultadoBuscaErro = document.querySelector(".busca-erro");


btnBuscar.addEventListener("click", (event) => {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
});


function mostraErro() {
    resultadoBuscaVazia.style.display = "none";
    resultadoBuscaConcluida.style.display = "none";
    resultadoBuscaErro.style.display = "block";
}


function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(body => {
        if (!body.erro) {
            resultadoBuscaVazia.style.display = "none";
            resultadoBuscaConcluida.style.display = "block";
            resultadoBuscaErro.style.display = "none";
            
            console.log(body);
    
            displayCep.innerText = body.cep;
            displayLogradouro.innerText = body.logradouro;
            displayBairro.innerText = body.bairro;
            displayCidade.innerText = body.localidade;
            displayEstado.innerText = body.uf;
        } else {
            mostraErro();
        }
    })
    .catch(error => {
        console.error(error);
        mostraErro();
    });
}