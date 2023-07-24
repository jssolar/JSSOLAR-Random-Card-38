
const cartaRandom = () => {
  let pintas = ["♦", "♥", "♠", "♣"];
  let numeros = [2, 3, 4, 5, 6, 7, 9, 8, 9, 10, "J", "Q", "K"];
  let randomPintas = Math.floor(Math.random() * pintas.length);
  let randomNumeros = Math.floor(Math.random() * numeros.length);

  let azar = pintas[randomPintas];
  let azar2 = numeros[randomNumeros];
  
  document.getElementById("pinta").innerHTML = azar;
  document.getElementById("carta-random").innerHTML = azar2;
  document.getElementById("pinta3").innerHTML = azar;

};

cartaRandom();




    



 arr = [1,2,3,4,5,6,7,8,9,10]
 
 numeros = Math.floor(Math.random()*arr.length)
 numeros % 2 ===0 ? (document.getElementById("pinta3").style.color= "back", document.getElementById("pinta").style.color= "black"): (document.getElementById("pinta3").style.color= "red", document.getElementById("pinta").style.color= "red")

