// Exercício 10
function fatorial(numero) {
  if (numero < 0) return undefined; // fatorial não definido para negativos
  if (numero === 0) return 1;
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}