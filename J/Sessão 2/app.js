// sistema cadastro de clientes
let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaJuros;
let NumAnos;
let BomPagador;
let Montante;
let Avalistas;
const numcliente = 1;
CadastrarCliente("Ana C","D C",23,2000,true,5,["Manuela","Anderson","Joseph"]);
Montante = CalcularMontante(valorEmprestimo,taxaJuros,NumAnos);


console.log("Boa Tarde Sr."+nome+" "+sobrenome+". Sua idade é: "+idade);
console.log("Sua taxa está em "+taxaJuros+" RS");
console.log("E seu Montante está em "+Montante+" RS");
console.log("O cliente "+nome+(BomPagador ? " é um bom pagador" : " não é um bom pagador" ));
console.log("Os avalistas do cliente são: "+Avalistas);
console.log("Seu avalista principal é: "+Avalistas[2]);
AdicionarAvalista("João");
AdicionarAvalista("Murilo");
AdicionarAvalista("Adobe");
console.log(Avalistas);
RemoverAvalista();
console.log(Avalistas);
EditarAvalista("Pedro", 4)
console.log(Avalistas);
OrdenarAvalista()
console.log(Avalistas);
ExibeAvalista();

function CadastrarCliente(Cnome,Csobrenome,Cidade,CvalorEmprestimo,CBomPagador = false,CNumAnos = 2, Cavalistas){
    nome = Cnome;
    sobrenome = Csobrenome;
    idade = Cidade;
    valorEmprestimo = CvalorEmprestimo;
    taxaJuros = TaxaJuros(idade)
    NumAnos = CNumAnos;
    BomPagador = CBomPagador; 
    Avalistas = Cavalistas;
}
function TaxaJuros(idade){
    if(idade<=25){return 0.09;}
    else if(idade<=35){return 0.08;}
    else if(idade<=50){return 0.07;}
    else{return 0.06;}
}
function CalcularMontante(valorEmprestimo,taxaJuros,NumAnos){
    let Montante = valorEmprestimo+(valorEmprestimo*taxaJuros*NumAnos);
    return Montante;
}
function TestarMontante(){
/*Simular valores
    for(let count = 0; count<3;count++){
       valorEmprestimo = parseInt(prompt("Insira o valor do Emprestimo: "));
       NumAnos = parseInt(prompt("Insira a qauntidade de anos: "));
       Juros = valorEmprestimo*taxaJuros*NumAnos;
       Montante = valorEmprestimo+Juros;
       console.log("Montante Teste: "+Montante)
    }
*/
/* ou
let count = parseInt(prompt("Quantas vezes deseja simular?"));
while(count>0){
    valorEmprestimo = parseInt(prompt("Insira o valor do Emprestimo: "));
    NumAnos = parseInt(prompt("Insira a qauntidade de anos: "));
    Juros = valorEmprestimo*taxaJuros*NumAnos;
    Montante = valorEmprestimo+Juros;
    console.log("Montante Teste: "+Montante);
    count--
}
*/
/* ou
do{
    valorEmprestimo = parseInt(prompt("Insira o valor do Emprestimo: "));
    NumAnos = parseInt(prompt("Insira a qauntidade de anos: "));
    Juros = valorEmprestimo*taxaJuros*NumAnos;
    Montante = valorEmprestimo+Juros;
    console.log("Montante Teste: "+Montante);
}while(valorEmprestimo !=0);
*/
while(true){
    valorEmprestimo = parseInt(prompt("Insira o valor do Emprestimo: "));
    if(valorEmprestimo === 0){break;}
    NumAnos = parseInt(prompt("Insira a qauntidade de anos: "));
    Juros = valorEmprestimo*taxaJuros*NumAnos;
    Montante = valorEmprestimo+Juros;
    console.log("Montante Teste: "+Montante);
    count--
}
}
function AdicionarAvalista(Avalista){
    Avalistas.push(Avalista);
}
function RemoverAvalista(){
    Avalistas.pop();
}
function EditarAvalista(novonomeava, indice){
Avalistas[indice] = novonomeava;
}
function OrdenarAvalista(){
    return Avalistas.sort();
}
function ExibeAvalista(){
    Avalistas.forEach((ava,indice) => {
        console.log(`O ${indice+1}° avalista é: ${ava}`);
    });
}