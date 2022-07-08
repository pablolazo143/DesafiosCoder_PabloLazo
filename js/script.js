let cantidad = parseInt(prompt('Ingrese la cantidad de dados a generar (número): ')); 
let dado;
let maxValue = 6;
let minValue = 1

if(isNaN(cantidad)){
    cantidad = parseInt(prompt('Ingrese un valor válido: ')); 
}else{
    for (let i = 1; i <= cantidad; i++) {
        dado = Math.floor(Math.random() * ((maxValue - minValue + 1)) + minValue);
        console.log(dado)
    }
}