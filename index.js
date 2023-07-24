
const cartaRandom = () => {
  let pintas = ["♦", "♥", "♠", "♣"];
  let numeros = [2, 3, 4, 5, 6, 7, 9, 8, 9, 10, "J", "Q", "K"];
  let randomPintas = Math.floor(Math.random() * pintas.length);
  let randomNumeros = Math.floor(Math.random() * numeros.length);

  let azar = pintas[randomPintas];
  let azar2 = numeros[randomNumeros];
  // let azar3 = pintas[randomPintas];
  
  document.getElementById("pinta").innerHTML = azar;
  document.getElementById("carta-random").innerHTML = azar2;
  document.getElementById("pinta3").innerHTML = azar;

  let letraColor = getRandomRedOrBlack();
  document.getElementById("pinta").style.color = letraColor;
  // document.getElementById("carta-random").style.color = letraColor;
  document.getElementById("pinta3").style.color = letraColor;

  const getRandomRedOrBlack = () => {
    // Generar un valor aleatorio entre 0 y 1 para determinar si es rojo o negro
    let isRed = Math.random() < 0.5;
  
    // Asignar el color correspondiente
    let color = isRed ? "#FF0000" : "#000000";
    return color;
  };
};

cartaRandom();

// let color = Math.random() < 0.5 ? "red" : "black";
// document.main.style.Color = color;