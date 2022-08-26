var itensOrcamento = [];

function adicionarItem() {
    //Captura do Elemento do input
    var inputDescricao = document.getElementById('descricao');
    var inputValor = document.getElementById('valor');

    //Validar dados de entrada
    if (inputDescricao.value == '' || inputValor.value == ''){
        alert('Ops! Você deve preencher a descrição e o valor.');
        return;
    }

    //Monta o novo iten no formato JSON (dicionario)
    var novoItem = {
        'descricao' : inputDescricao.value,
        'valor' : inputValor.value
    }

    // Adiciona um novo item no array de itens do orçamento
    itensOrcamento.push(novoItem);

    redesenharTabela();
    
    //Limpar os campos de entrada
    inputDescricao.value = null;
    inputValor.value = null;

}

function redesenharTabela() {
    var corpoTabelaItens = '';
    var somatorio = 0;

    for(var i=0; i < itensOrcamento.length; i++){
        var item = itensOrcamento[i];
        var valor = parseFloat(item['valor']);

        somatorio += valor;

        corpoTabelaItens += `
            <tr>
                <td> ${item["descricao"]} </td>
                <td class="text-right"> R$ ${valor.toFixed(2)} </td>
            </tr>
        `;
    }

    var tabelaItensOrcamento = document.getElementById('tabela_itens_orcamento');
    tabelaItensOrcamento.innerHTML = corpoTabelaItens

    var inputSomatorio = document.getElementById('somatorio')
    inputSomatorio.value = somatorio.toFixed(2);
}