
var PROIBIDO = 0
var FACULTATIVO = 1
var OBRIGATORIO = 2


function deve_votar(idade){
    if (idade >= 18 && idade <= 70){
        return OBRIGATORIO
    }
    else{
        if (idade > 16){
            return FACULTATIVO
        }
    }
    return PROIBIDO
}

function eh_digito(caracter){
    var numeros = '0123456789'
    if(numeros.includes(caracter)){
        return true
    }
    return false
}

function eh_numero(texto){
    for(var i = 0; i < texto.length; i++){
        if(!eh_digito(texto[i])){
            return false;
        }
    }
    return true
}

function validar_situacao(){
    var idade = document.getElementById("input_idade").value
    console.log(idade)
    if(eh_numero(idade)){
        switch(deve_votar(idade)){
            case OBRIGATORIO:
                alert("Vocé é obrigado a votar");
                break;
            case FACULTATIVO:
                alert("Facultativo");
                break;
            default:
                alert("Proibido votar");
        }
        console.log("hop hop ha")
    } else {
        var paragrafo = document.getElementById("resposta")
        paragrafo.innerHTML = "Não é um número válido"
        paragrafo.setAttribute('style', 'color: red')
        var campo = document.getElementById("input_idade")
        campo.value = ""
        console.log("numero invalido")
    }
}