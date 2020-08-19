let n1 = Number(window.prompt("Digite a nota 1:"));
let n2 = Number(window.prompt("Digite a nota 2:"));
let aula = Number(window.prompt("Digite a quantida de aulas:"));
let frequencia = Number(window.prompt("Digite a quantidade de aulasa frequentadas:"));

let resultado = document.querySelector('div.resultado');

let calcularMedia = function () {
    return (n1 + n2) / 2;
};

let calcularPercentagemFrequencia = () => frequencia / aula * 100;

(function ehAprovado(calcularMedia, calcularPercentagemFrequencia) {

    if (calcularMedia() > 59 && calcularPercentagemFrequencia() > 74) {
        resultado.innerHTML = `O aluno foi aprovado: `;
    } else {
        resultado.innerHTML = `O aluno foi reprovado: `;
    }

    resultado.innerHTML += `Media final: ${calcularMedia().toFixed(1)}, Frequência: ${calcularPercentagemFrequencia().toFixed(1)}`;

})(calcularMedia, calcularPercentagemFrequencia);