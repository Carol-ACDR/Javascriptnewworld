const Notas = [1,2,3,4,5,6,7,8,9,10];
console.log(Relatorio(Notas));

function Relatorio(array){
    let TotalAprovados = 0;
    for(Nota of Notas){
        if(Nota>=7){TotalAprovados+=1}
    }
    return "Total de Aprovados: "+TotalAprovados+" - Total de Reprovados: "+((Notas.length) - TotalAprovados);
    }