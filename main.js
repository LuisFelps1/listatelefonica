const form = document.getElementById('form-telefone');
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault()

    const inputNomeCompleto = document.getElementById('nome-do-contato')
    const inputNumeroDeContato = document.getElementById('numero-do-contato')

    let linha = '<tr>';
    linha += `<td>${inputNomeCompleto.value}</td>`
    linha += `<td>${inputNumeroDeContato.value}</td>`
    linha += `<td></td>`
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
})