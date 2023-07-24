
const cartaRandom = () => {
  let pintas = ["♦", "♥", "♠", "♣"];
  let numeros = [2, 3, 4, 5, 6, 7, 9, 8, 9, 10, "J", "Q", "K"];

  let randomPintas = Math.floor(Math.random() * pintas.length);
  let randomNumeros = Math.floor(Math.random() * numeros.length);

  let azar = pintas[randomPintas];
  let azar2 = numeros[randomNumeros];
  let azar3 = pintas[randomPintas];
 

  document.getElementById("pinta").innerHTML = azar;
  document.getElementById("carta-random").innerHTML = azar2;
  document.getElementById("pinta3").innerHTML = azar3;
};
cartaRandom();
