const adviceDisplay = document.querySelector("p")
const adviceID = document.querySelector("h1")
const newQuote = document.getElementById("dice")

async function getRandomAdvice(){
    const  response = await fetch("https://api.adviceslip.com/advice")
    const  data = await response.json()
    // console.log(data)
    adviceID.textContent = `ADVICE #${data.slip.id}`
    adviceDisplay.textContent = `"${data.slip.advice}"`
}
getRandomAdvice()

newQuote.addEventListener("click",getRandomAdvice)