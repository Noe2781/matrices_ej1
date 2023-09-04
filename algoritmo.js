const MIN = 1;
const MAX = 100;

const MAX_COL = 10;
const MAX_FILA = 10;

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