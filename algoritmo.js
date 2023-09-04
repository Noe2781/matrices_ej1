const MIN = 1;
const MAX = 50;

const MAX_COL = 5;
const MAX_FILA = 5;

const matriz = [];

let num = MIN;

for (let fila = 0; fila <MAX_FILA; fila ++) {
   matriz.push([]);
   for (let col  = 0;col < MAX_COL; col++) {
    matriz[fila][col] = num;
    num++;
   
    
   }
    
}

console.table(matriz);