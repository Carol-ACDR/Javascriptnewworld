let count = 0;
let TotalTemp = 0;
while(true){
    let Temp = parseInt(prompt("Insira temperatura :"));
    TotalTemp += Temp;
    if(Temp === 0){console.log(`Média = ${TotalTemp/count}°C`);break;}
    count ++;
    console.log(`Temp${count} = ${Temp}°C`);
}