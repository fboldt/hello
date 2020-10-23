document.addEventListener("DOMContentLoaded", function () {
    inserirBotoesComInnerHTML();
    inserirBotoesComJS();
});

function criarBotao(texto, cor) {
    botao = document.createElement("button");
    botao.innerHTML = texto;
    botao.addEventListener("click", function () {
        mudarCorDoTitulo(cor);
    })
    return botao;
}

const cores = [
    ["azul", "blue"],
    ["verde", "green"],
    ["vermelho", "red"]
];

function inserirBotoesComJS() {
    div = document.createElement("div");
    div.style.backgroundColor = "yellow";
    cores.forEach(item => {
        const [texto, cor] = item;
        botao = criarBotao(texto, cor);
        div.appendChild(botao);
        div.appendChild(document.createTextNode(" "));
    });
    document.body.prepend(div);
}

function inserirBotoesComInnerHTML() {
    div = document.createElement("div");
    div.style.backgroundColor = "cyan";
    div.innerHTML = `
    <button onclick="mudarCorDoTitulo('blue')">azul</button>
    <button onclick="mudarCorDoTitulo('green')">verde</button>
    <button onclick="mudarCorDoTitulo('red')">vermelho</button>
    `;
    document.body.prepend(div);
}

function mudarCorDoTitulo(cor) {
    h1 = document.querySelector("h1");
    h1.style.color = cor;
}
