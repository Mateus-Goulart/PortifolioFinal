function buscarEndereco(){
    var cep = $('#cep').val().replace('.','');

    $.ajax({
        type: 'GET',
        url: `https://viacep.com.br/ws/${cep}/json/`,
        timeout: 2000,
        success: function(data){
            $('#cidade').val(data.localidade);
            $('#uf').val(data.uf);
            $('#bairro').val(data.bairro);
            $('#logradouro').val(data.logradouro);
            $('#numero').focus();
        },

        error: function(){
            alert('não fou possivel localizar o endereço para este CEP')
        }
    }); 
}