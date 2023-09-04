const MIN = 1;
const MAX = 151;

const MAX_COL = 15;
const MAX_FILA = 11;

const matriz = [];

let num = MIN;

for (let fila = 0; fila <MAX_FILA; fila ++) {
   matriz.push([]);
   for (let col  = 0;col < MAX_COL; col++) {
    matriz[fila][col] = num;
    num++;
    if (num>MAX) {
        fila = MAX_FILA;
        col = MAX_COL;
    }
   
    
   }
    
}

console.table(matriz);