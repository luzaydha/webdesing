function mediaArray(numeros) {
  const soma = numeros.reduce((acc, val) => acc + val, 0);
  return soma / numeros.length;
}