const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
const intentos = 3;

for (let i = 0; i < intentos; i++) {
  const intento = parseInt(prompt(`Intento ${i + 1}: Adivina el número (1-10)`));

  if (intento === numeroAleatorio) {
    alert(`¡Felicidades! Adivinaste el número ${numeroAleatorio}`);
    break;
  } else if (i === intentos - 1) {
    alert(`Agotaste tus intentos. El número era ${numeroAleatorio}`);
  } else if (intento < numeroAleatorio) {
    alert('El número es mayor. Intenta de nuevo.');
  } else {
    alert('El número es menor. Intenta de nuevo.');
  }
}
