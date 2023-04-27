const form = document.getElementById('form_atividade');

const table_body_init = document.querySelector('tbody')

const img_aprovado = '<img src="/images/aprovado.png" alt="emoji de comemoração">'
const img_reprovado = '<img src="/images/reprovado.png" alt="emoji triste">'
const resultado_reprovado = '<span class="resultado reprovado">Reprovado</span>'
const resultado_aprovado = '<span class="resultado aprovado">Aprovado</span>'
const botao_remove = '<button class="button_remove_atividade" type="submit">X</button>'

const nota_min = parseFloat(prompt("Digite a nota mínima para aprovação:"))

let notas = []
let atividades = []
let linha = ''


form.addEventListener('submit', function (e) {
    e.preventDefault();

    adiciona_linha()
    atualiza_atividades()
    atualiza_resultado()

    imprime_tabela()

})

function adiciona_linha() {
    let nome_atividade = document.querySelector('#nome_atividade');
    let nota_atividade = document.querySelector('#nota_atividade');

    if (atividades.includes(nome_atividade.value)) {
        alert(`A atividade "${nome_atividade.value}" já foi inserida`)
    } else {
        notas.push(nota_atividade.value);
        atividades.push(nome_atividade.value);

        linha += `<tr>`
        linha += `<td>${nome_atividade.value}</td>`
        linha += `<td>${nota_atividade.value}</td>`
        linha += `<td>${nota_atividade.value >= nota_min ? img_aprovado : img_reprovado}</td>`
        // linha += `<td>${botao_remove}</td>`
        linha += `</tr>`
    }

    nome_atividade = ''
    nota_atividade = ''
}

function calcularMedia(notas) {
    let soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0)
    return soma / notas.length;
}

function atualiza_atividades() {
    const table_body = document.querySelector('tbody')
    table_body.innerHTML = linha
}

function atualiza_resultado() {
    let media = calcularMedia(notas)

    let resultado = '<tr>'
    resultado += `<td>Média Final</td>`
    resultado += `<td>${media.toFixed(1)}</td>`
    resultado += `<td>${media >= nota_min ? resultado_aprovado : resultado_reprovado}</td>`
    resultado += `</tr>`

    const resultado_media = document.querySelector('tfoot')
    resultado_media.innerHTML = resultado
}

function remove_atividade() {

}

function imprime_tabela() {
    // console.log(atividades)
    // console.log(notas)
    console.log(linha)
}