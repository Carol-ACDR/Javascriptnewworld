
let suspeito = 0;
let Classificação = ['inocente','inocente','suspeito', 'cumplice', 'cumplice', 'assassino']
for(let i = 1; i != 6; i++){
    suspeito += Pergunta(i);
}
console.log("O veredito é: "+Classificação[suspeito]);



function Pergunta(Num){
    let resposta;
    let Contagem;
    switch(Num){
        case 1:
            resposta = prompt("Telefonou para a vítima?");
            Contagem = Conta(resposta);
            break
        case 2:
            resposta = prompt("Esteve no local do crime?");
            Contagem = Conta(resposta);
            break
        case 3:
            resposta = prompt("Mora perto da vítima?");
            Contagem = Conta(resposta);
            break
        case 4:
            resposta = prompt("Devia para a vítima?");
            Contagem = Conta(resposta);
            break
        case 5:
            resposta = prompt("Já trabalhou com a vítima?");
            Contagem = Conta(resposta);
            break
        default:
            console.log("Código falhou");
            break
    }
    return Contagem;
}
function Conta(resp){
    if (resp ==="sim"){return 1;}
    else return 0;
}


