const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 ou 2",
        alternativas: [
            {
                texto: "1",
                afirmacao: ""
            },
            {
                texto: "2",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "3 ou 4",
        alternativas: [
            {
                texto: "3",
                afirmacao: ""
            },
            {
                texto: "4",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "5 ou 6",
        alternativas: [
            {
                texto: "5",
                afirmacao: ""
            },
            {
                texto: "6",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "7 ou 8",
        alternativas: [
            {
                texto: "7",
                afirmacao: ""
            },
            {
                texto: "8",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "9 ou 10",
        alternativas: [
            {
                texto: "9",
                afirmacao: ""
            },
            {
                texto: "10",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
