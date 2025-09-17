// Exercício 8
function ehPalindromo(palavra) {
  const palavraMinuscula = palavra.toLowerCase();
  const invertida = palavraMinuscula.split('').reverse().join('');
  return palavraMinuscula === invertida;
}