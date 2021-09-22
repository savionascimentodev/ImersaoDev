

const secretNumber = parseInt(Math.random() * 11)

function kick() {
  const elementResult = document.getElementById("result")

  let change = parseInt(document.getElementById("value").value)

  if (change === secretNumber) {
    elementResult.innerHTML = "Você acertou!"
  } else if (change > 10 || change < 0) {
    elementResult.innerHTML = "Você deve digitar um número de 0 a 10"
  } else {
    elementResult.innerHTML = `Você errou o número secreto era ${secretNumber}`
  }
}