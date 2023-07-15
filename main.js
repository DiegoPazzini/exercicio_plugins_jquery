$(document).ready(function(){
    $("#telefone").mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $("#cpf").mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $("#cep").mask('00000-000', {
        placeholder: '_____-___'
    });
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email: true
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            cep:{
                required:true
            },
            endereco:{
                required:true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome',
                telefone: 'Por favor, insira seu telefone',
                email: 'Por favor, insira seu E-mail',
                cpf: 'Por favor, insira seu CPF',
                cep:'Por favor, insira seu Cep',
                endereco:'Por favor, insira seu endereço',

        },
        submitHandler: function(form){
            alert('Enviado com sucesso');  
        },
        invalidHandler: function(evento, validador){
            let campInvalido = validador.numberOfInvalids();
            if(campInvalido){
                alert(`Você não preencheu corretamente, verifique pois temos ${campInvalido} campos inválidos`)
            }
        }
    })
});